import CIcon from "./src/main";

/* istanbul ignore next */
CIcon.install = function (Vue) {
  Vue.component(CIcon.name, CIcon);
};

export default CIcon;
