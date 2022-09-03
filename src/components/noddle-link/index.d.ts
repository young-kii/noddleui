import { NavLinkProps } from "react-router-dom";
import {ReactNode} from "react";

export interface NoddleLinkProps {
    to: string,
    children: ReactNode | ((props: { isActive: boolean; }) => ReactNode)
}