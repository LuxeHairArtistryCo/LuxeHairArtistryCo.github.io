import { ReactNode } from "react";
import { Colors } from "../global";

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
  className?: string;
  artistID: string;
  serviceList: ServiceListGroupNS.Service[];
}

function ServiceListGroup({
  children,
  className,
  artistID,
  serviceList,
}: Props) {
  const getServiceListItemClassName = (service: ServiceListGroupNS.Service) => {
    switch (service.type) {
      case "group":
        return "list-group-item border-bottom-0 px-4";
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
    <div className={className}>
      <ul className="list-group list-group-flush">
        {serviceList.map((service, index) => (
          <li
            className={getServiceListItemClassName(service)}
            key={artistID + index}
            style={{
              background: Colors.tertiary,
              borderTopColor: Colors.dark,
            }}
          >
            {getServiceListItem(service)}
          </li>
        ))}
      </ul>
      {children}
    </div>
  );
}

export default ServiceListGroup;
