export namespace ServiceListGroupNS {
  export type Service = {
    type: "group" | "subgroup" | "item";
    name: string;
    description?: string;
    price?: string;
  };
}

function ServiceListGroup() {
  return <div>test</div>;
}

export default ServiceListGroup;
