import withPropOverload from "./withPropOverload";
import withModifiers from "./withModifiers";
import withClassName from "./withClassName";
import withRenderOverride from "./withRenderOverride";
import combineWrappers from "./combineWrappers";

export default (element, className) =>
  combineWrappers(
    withPropOverload,
    withModifiers,
    withClassName(className),
    withRenderOverride
  )(element);
