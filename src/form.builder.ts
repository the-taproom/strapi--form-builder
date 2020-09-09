import { ATTIBUTE_TYPES, AttributeTypesBlacklist } from "./types/content-attribute-types";

import {
  ContentTypeResponse,
  Attribute,
  Fields,
  ContentType,
  FormBuilderOutput,
  ComponentList
} from "./interfaces";

export default class StrapiForm {
  private url: string;
  private blacklistedProps = AttributeTypesBlacklist;
  private contentType: ContentType;
  private contentTypeUID: string;
  private components: ComponentList;
  public fields: Fields;
  public formState: Fields;

  constructor(
    baseURL: string,
    contentTypeUID: string
  ) {
    this.contentTypeUID = contentTypeUID;
    this.url = `${baseURL}/content-manager/content-types`;
  }

  async getContentType(): Promise<void> {
    const res = await fetch(`${this.url}/${this.contentTypeUID}`);
    const json: ContentTypeResponse = await res.json();
    if (json && json.statusCode) throw new Error(json.message);
    this.contentType = json.data.contentType;
    this.components = json.data && json.data.components;
  }

  setRequestState(key: string, componentId: string, value: any): Fields | {} {
    if (parent) {
      for (const component of this.formState.content) {
        if (component.__component === componentId) {
          component[key] = value;
        }
      }
    }

    this.formState[key] = value;
    return this.fields;
  }

  updateFormState(key: string, value: string, parent: string): Fields {
    if (parent) {
      this.formState[parent][key] = value;
    } else {
      this.formState[key] = value;
    }

    return this.formState;
  }

  isComponent(attribute: Attribute): boolean {
    return attribute && attribute.type === ATTIBUTE_TYPES.COMPONENT;
  }

  isSimpleType(key: string, attribute: Attribute): boolean {
    return attribute && this.isComponent(attribute) && this.canEdit(key);
  }

  canEdit(key: string): boolean {
    return !this.blacklistedProps.includes(key);
  }

  buildComponent(componentKey: string, attribute: Attribute): void {
    if (!this.components[attribute.component].schema.attributes) return;

    const componentAttrs = this.components[attribute.component].schema.attributes;
    console.log(this.formState[componentKey])
    componentAttrs.id = this.formState[componentKey] && this.formState[componentKey].id || null;

    for (const childKey in componentAttrs) {
      if (this.canEdit(childKey)) {
        this.setField(childKey, componentAttrs[childKey], componentKey);
        this.setFormState(childKey, componentKey);
      }
    }
  }

  setFormState(key: string, componentKey?: string): void {
    if (!this.canEdit(key)) return;
    if (componentKey) {
      this.formState[componentKey] = this.formState[componentKey] || {};
      this.formState[componentKey][key] = this.formState[componentKey][key] || null;
    } else {
      this.formState[key] = this.formState[key] || null;
    }
  }

  setField(key: string, attribute: Attribute, componentKey?: string) {
    if (!this.canEdit(key)) return;
    if (componentKey) {
      this.fields[componentKey] = this.fields[componentKey] || {};
      this.fields[componentKey][key] = {
        ...attribute,
        value: this.formState[componentKey][key] || null
      };
    } else {
      this.fields[key] = {
        ...attribute,
        value: this.formState[key] || null
      };
    }
  }

  gatherSchema(): void {
    this.fields = {};
    const attributes = this.contentType.schema.attributes;

    for (const key in attributes) {
      if (this.isComponent(attributes[key])) {
        this.buildComponent(key, attributes[key])
      } else {
        this.setField(key, attributes[key]);
        this.setFormState(key);
      }
    }
  }

  async getSchema(existingEntry?: Fields): Promise<FormBuilderOutput> {
    this.formState = existingEntry || {};
    await this.getContentType();
    this.gatherSchema();
    return {
      fields: this.fields,
      formState: this.formState
    };
  }
}