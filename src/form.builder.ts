export default class StrapiForm {
  private baseURL: string;
  private url: string;
  private acceptedTypes = [
    "text",
    "integer",
    "media",
    "component",
    "boolean",
    "enumeration",
    "label",
  ];
  private blacklistedProps = ["id", "users"];
  private whitelistKeys = ["__component", "__label"];
  private apiContentType: any = {};
  private formattedSchema: any = {};
  private apiID: string = "";
  private strapiSDK: any;
  public existingModel: object;

  constructor(
    baseURL: string,
    contentType: any,
    strapiSDk: any,
    existingModel?: any
  ) {
    this.strapiSDK = strapiSDk;
    this.existingModel = existingModel;
    this.baseURL = baseURL;
    this.url = `${this.baseURL}/content-manager/content-types/${contentType}`;
  }

  get appUrl() {
    return `${this.baseURL}/${this.apiID}`;
  }

  async getContentType() {
    const res = await fetch(this.url);
    const json = await res.json();

    if (typeof json !== "object" && json.data) return {};

    this.apiContentType = json.data;
    this.apiID = this.apiContentType.contentType.apiID;
  }

  async create(data: any) {
    return await this.strapiSDK.createEntry(this.apiID, data);
  }

  async update(id: any, data: any) {
    return await this.strapiSDK.updateEntry(this.apiID, id, data);
  }

  async search(params: any) {
    return await this.strapiSDK.getEntries(this.apiID, params);
  }

  async delete(id: any) {
    return await this.strapiSDK.deleteEntry(this.apiID, id);
  }

  isBuildable(field: any) {
    return field && field.type && this.acceptedTypes.includes(field.type);
  }

  isComponent(field: any) {
    return field.type === "component";
  }

  isValidType(key: any, item: any) {
    return (
      item &&
      this.isBuildable(item) &&
      !this.isComponent(item) &&
      this.acceptedTypes.includes(item.type) !== false &&
      !this.blacklistedProps.includes(key)
    );
  }

  gatherSchema(parent?: any) {
    parent = parent || this.apiContentType.contentType.schema.attributes;

    Object.keys(parent).map((key) => {
      if (
        (!this.isComponent(parent[key]) &&
          this.isValidType(key, parent[key])) ||
        this.whitelistKeys.includes(key)
      ) {
        this.formattedSchema[key] = parent[key];
      }

      if (this.isComponent(parent[key])) {
        const componentAttrs = this.apiContentType.components[
          parent[key].component
        ].schema.attributes;
        componentAttrs.__component = parent[key].component;
        componentAttrs.__label = key;
        this.formattedSchema.content.push(componentAttrs);
        this.gatherSchema(componentAttrs);
      }
    });
  }

  async getFormSchema() {
    await this.getContentType();
    this.gatherSchema();
    return this.formattedSchema;
  }
}
