/**
 * This file was generated from AmzTopLogo.xml
 * WARNING: All changes made to this file will be overwritten
 * @author Mendix Widgets Framework Team
 */
import { CSSProperties } from "react";
import { ActionValue, DynamicValue, WebImage } from "mendix";

export interface AmzTopLogoContainerProps {
    name: string;
    class: string;
    style?: CSSProperties;
    tabIndex?: number;
    pptLogo?: DynamicValue<WebImage>;
    pptText?: DynamicValue<string>;
    pptTitle?: DynamicValue<string>;
    actOnClick?: ActionValue;
    optThemeTokens?: DynamicValue<string>;
    txtCopyright?: DynamicValue<string>;
}

export interface AmzTopLogoPreviewProps {
    /**
     * @deprecated Deprecated since version 9.18.0. Please use class property instead.
     */
    className: string;
    class: string;
    style: string;
    styleObject?: CSSProperties;
    readOnly: boolean;
    renderMode: "design" | "xray" | "structure";
    translate: (text: string) => string;
    pptLogo: { type: "static"; imageUrl: string; } | { type: "dynamic"; entity: string; } | null;
    pptText: string;
    pptTitle: string;
    actOnClick: {} | null;
    optThemeTokens: string;
    txtCopyright: string;
}
