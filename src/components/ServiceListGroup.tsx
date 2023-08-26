import { ReactNode } from "react";

export namespace ServiceListGroupNS {
  export type Service = {
    type: "group" | "subgroup" | "item";
    name: string;
    description?: string;
    price?: string;
  };
}

interface Props {
  children?: ReactNode;
  artistID: string;
  serviceList: ServiceListGroupNS.Service[];
}

function ServiceListGroup({ children, artistID, serviceList }: Props) {
  const getServiceListItemClassName = (
    service: ServiceListGroupNS.Service,
    index: number
  ) => {
    switch (service.type) {
      case "group":
        return (
          "list-group-item border-bottom-0 px-4" +
          (index != 0 ? " border-top" : "")
        );
      case "subgroup":
        return "list-group-item border-0 px-4";
      default:
        return "list-group-item border-0 px-5";
    }
  };

  const getServiceListItem = (service: ServiceListGroupNS.Service) => {
    var ServiceListItemTitle: keyof JSX.IntrinsicElements;
    switch (service.type) {
      case "group":
        ServiceListItemTitle = "h5";
        break;
      case "subgroup":
        ServiceListItemTitle = "h6";
        break;
      default:
        ServiceListItemTitle = "p";
        break;
    }
    return (
      <>
        <ServiceListItemTitle className="card-title">
          {service.name}
          <i>{service.price !== undefined ? " --- " + service.price : ""}</i>
        </ServiceListItemTitle>
        {service.description !== undefined && (
          <p className="ps-5">
            <i>{service.description}</i>
          </p>
        )}
      </>
    );
  };

  return (
    <>
      <ul className="list-group list-group-flush">
        {serviceList.map((service, index) => (
          <li
            className={getServiceListItemClassName(service, index)}
            key={artistID + index}
          >
            {getServiceListItem(service)}
          </li>
        ))}
      </ul>
      {children}
    </>
  );
}

export default ServiceListGroup;
