import { IconButton } from "@material-ui/core";
import sty from "styled-components";



export const Wrapper = sty.div`
  margin: 40px;
`

export const StyledButton = sty(IconButton)`
    position: fixed;
    z-index: 100;
    right: 20px;
    top: 20px;
`
