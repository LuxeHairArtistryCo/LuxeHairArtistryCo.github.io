import { ReactNode } from "react";
import { Global } from "../global";

type Props = {
  children?: ReactNode;
  logoPath: string;
  hoursOfOp: Global.HoursOfOp;
  contactInfo: string[][];
};

function Footer({ children, logoPath, hoursOfOp, contactInfo }: Props) {
  const getHoursOfOp = (dayOfWeek: string, hours: string) => {
    return (
      <li className="list-group-item border-0 text-bg-dark p-0" key={dayOfWeek}>
        <div className="row">
          <p className="col-4 d-inline m-0 text-end">{dayOfWeek + ":"}</p>
          <p className="col d-inline m-0 text-start">{hours}</p>
        </div>
      </li>
    );
  };

  return (
    <div className="container-fluid mx-0 py-5 mt-5 text-bg-dark">
      <div className="row px-4">
        <div className="col-md-4 py-2 py-md-0">
          <h6>Hours of Operation</h6>
          <ul className="list-group">
            {getHoursOfOp("Sunday", hoursOfOp.sunday)}
            {getHoursOfOp("Monday", hoursOfOp.monday)}
            {getHoursOfOp("Tuesday", hoursOfOp.tuesday)}
            {getHoursOfOp("Wednesday", hoursOfOp.wednesday)}
            {getHoursOfOp("Thursday", hoursOfOp.thursday)}
            {getHoursOfOp("Friday", hoursOfOp.friday)}
            {getHoursOfOp("Saturday", hoursOfOp.saturday)}
          </ul>
          <li
            className="list-group-item border-0 text-bg-dark p-0"
            key={"notes"}
          >
            <div className="row">
              <p className="col d-inline m-0 pt-2">{hoursOfOp.notes}</p>
            </div>
          </li>
        </div>
        <div className="col-md-4 py-2 py-md-0">
          <h6>Contact Us</h6>
          <ul className="list-group">
            {contactInfo.map((info, index) => (
              <li
                className="list-group-item border-0 text-bg-dark p-0"
                key={index}
              >
                <div className="row">
                  <p className="col-4 d-inline m-0 text-end">{info[0]}</p>
                  <p className="col d-inline m-0 text-start">{info[1]}</p>
                </div>
              </li>
            ))}
            <li
              className="list-group-item border-0 text-bg-dark p-0 pt-2 mx-5"
              key={"social"}
            >
              <div className="d-flex justify-content-center justify-content-md-start ps-md-5">
                <a className="m-1 px-1" href="#">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    fill="currentColor"
                    className="bi bi-instagram"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" />
                  </svg>
                </a>
                <a className="m-1 px-1" href="#">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    fill="currentColor"
                    className="bi bi-facebook"
                    viewBox="0 0 16 16"
                  >
                    <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                  </svg>
                </a>
              </div>
            </li>
          </ul>
        </div>
        <div className="col-md-4 order-md-first px-4 px-md-5 py-2 py-md-0">
          <img className="img-fluid rounded float-start" src={logoPath} />
        </div>
      </div>
      {children}
    </div>
  );
}

export default Footer;
