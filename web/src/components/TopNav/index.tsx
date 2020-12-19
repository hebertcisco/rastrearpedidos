import { ICode, ISocial } from "../../utils/types";

import React from "react";
interface ITopNav {
  codigo: ICode;
  social: ISocial[];
}
const TopNav: React.FC<ITopNav> = ({ codigo, social }) => {
  return (
    <>
      <div className="wrap">
        <div className="container">
          <div className="row">
            <div className="col-md-6 d-flex align-items-center">
              <p className="mb-0 phone pl-md-2">
                <a href="#" className="mr-2">
                  <span className="fa fa-phone mr-1"></span> {codigo}
                </a>
              </p>
            </div>
            <div className="col-md-6 d-flex justify-content-md-end">
              <div className="social-media">
                <p className="mb-0 d-flex">
                  {social.map((social: ISocial) => {
                    return (
                      <a
                        href={social.ref}
                        className="d-flex align-items-center justify-content-center"
                      >
                        <span className={social.icon}>
                          <i className="sr-only">{social.name}</i>
                        </span>
                      </a>
                    );
                  })}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default TopNav;
