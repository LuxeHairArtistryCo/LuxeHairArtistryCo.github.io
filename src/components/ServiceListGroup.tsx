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
  const getServiceListItemClassName = (
    service: ServiceListGroupNS.Service,
    index: number
  ) => {
    switch (service.type) {
      case "group":
        return "list-group-item px-4 " + (index !== 0 ? "mt-2" : "");
      case "subgroup":
        return "list-group-item px-4";
      default:
        return "list-group-item px-5";
    }
  };

  const getServiceListItemStyle = (service: ServiceListGroupNS.Service) => {
    switch (service.type) {
      case "group":
        return {
          background: Colors.tertiary,
          borderWidth: 1,
          borderColor: Colors.dark_a10,
          borderStyle: "solid",
          borderBottomWidth: 0,
          borderLeftWidth: 0,
          borderRightWidth: 0,
        };
      case "subgroup":
        return {
          background: Colors.tertiary,
          border: 0,
        };
      default:
        return {
          background: Colors.tertiary,
          border: 0,
        };
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
        <ServiceListItemTitle className="my-0">
          {service.name}
          <i>{service.price !== undefined ? " --- " + service.price : ""}</i>
        </ServiceListItemTitle>
        {service.description !== undefined && (
          <p className="ps-4 mb-0">
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
            className={getServiceListItemClassName(service, index)}
            key={artistID + index}
            style={getServiceListItemStyle(service)}
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
