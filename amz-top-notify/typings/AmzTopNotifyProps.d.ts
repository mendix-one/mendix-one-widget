/**
 * This file was generated from AmzTopNotify.xml
 * WARNING: All changes made to this file will be overwritten
 * @author Mendix Widgets Framework Team
 */
import { CSSProperties } from "react";
import { ActionValue, DynamicValue, ListValue, ListActionValue, ListAttributeValue } from "mendix";
import { Big } from "big.js";

export interface AmzTopNotifyContainerProps {
    name: string;
    class: string;
    style?: CSSProperties;
    tabIndex?: number;
    dsTopNotify?: ListValue;
    attKey?: ListAttributeValue<Big | string>;
    actReadNotify?: ListActionValue;
    actMarkAllAsRead?: ActionValue;
    optThemeTokens?: DynamicValue<string>;
    txtReadNotify?: DynamicValue<string>;
    txtMarkAllAsRead?: DynamicValue<string>;
}

export interface AmzTopNotifyPreviewProps {
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
    dsTopNotify: {} | { caption: string } | { type: string } | null;
    attKey: string;
    actReadNotify: {} | null;
    actMarkAllAsRead: {} | null;
    optThemeTokens: string;
    txtReadNotify: string;
    txtMarkAllAsRead: string;
}
