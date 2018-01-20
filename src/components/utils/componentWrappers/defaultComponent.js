import withPropOverload from "./withPropOverload";
import withModifiers from "./withModifiers";
import withClassName from "./withClassName";
import overridable from "./overridable";
import combineWrappers from "./combineWrappers";

export default (element, className) =>
  combineWrappers(
    withPropOverload,
    withModifiers,
    withClassName(className),
    overridable
  )(element);
