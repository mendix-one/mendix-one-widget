/**
 * This file was generated from AmzUserMenu.xml
 * WARNING: All changes made to this file will be overwritten
 * @author Mendix Widgets Framework Team
 */
import { CSSProperties } from "react";
import { ActionValue, DynamicValue, EditableValue, WebImage } from "mendix";

export interface AmzUserMenuContainerProps {
    name: string;
    class: string;
    style?: CSSProperties;
    tabIndex?: number;
    pptDisplayName?: EditableValue<string>;
    pptUserRoles?: EditableValue<string>;
    pptAvatar?: DynamicValue<WebImage>;
    actChangeLanuage?: ActionValue;
    actShowProfile?: ActionValue;
    actChangePassword?: ActionValue;
    actCustomSettings?: ActionValue;
    optThemeTokens?: DynamicValue<string>;
    txtCopyright?: DynamicValue<string>;
}

export interface AmzUserMenuPreviewProps {
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
    pptDisplayName: string;
    pptUserRoles: string;
    pptAvatar: { type: "static"; imageUrl: string; } | { type: "dynamic"; entity: string; } | null;
    actChangeLanuage: {} | null;
    actShowProfile: {} | null;
    actChangePassword: {} | null;
    actCustomSettings: {} | null;
    optThemeTokens: string;
    txtCopyright: string;
}
