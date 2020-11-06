
import * as React from "react";
import { Button } from "@material-ui/core"
type Props = {
  text: string;
};

const B: React.FC<Props> = ({ text }) => <Button color="primary" variant="contained">
  {text}
</Button>;
export default B