import withPropOverload from "components/utils/withPropOverload";
import withModifiers from "components/utils/withModifiers";
import overridable from "components/utils/overrideable";

export default element => withPropOverload(withModifiers(overridable(element)));
