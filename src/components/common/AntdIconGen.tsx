import type { CSSProperties, ComponentType } from "react";

type IconGenProps = {
  icon: ComponentType<any>;
  style?: CSSProperties;
};

export default function AntdIconGen({ icon: Icon, style }: IconGenProps) {
  return <Icon style={style} />;
}
