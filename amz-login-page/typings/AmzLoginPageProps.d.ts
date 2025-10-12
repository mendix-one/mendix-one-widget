/**
 * This file was generated from AmzLoginPage.xml
 * WARNING: All changes made to this file will be overwritten
 * @author Mendix Widgets Framework Team
 */
import { ComponentType, CSSProperties, ReactNode } from "react";
import { ActionValue, DynamicValue, Option } from "mendix";

export interface AmzLoginPageContainerProps {
    name: string;
    class: string;
    style?: CSSProperties;
    tabIndex?: number;
    actEnterPage?: ActionValue<{ params: Option<string> }>;
    actExitPage?: ActionValue<{ params: Option<string> }>;
    actChangePage?: ActionValue<{ params: Option<string> }>;
    optEnabelAIBot: boolean;
    previewNavigationPanel: boolean;
    previewAIBotPanel: boolean;
    optThemeTokens?: DynamicValue<string>;
    txtCopyright?: DynamicValue<string>;
    wdgBrandLogo?: ReactNode;
    wdgTopTasks?: ReactNode;
    wdgTopNotify?: ReactNode;
    wdgUserMenu?: ReactNode;
    wdgPageNavBar?: ReactNode;
    wdgAIChatBox?: ReactNode;
    wdgMainContent?: ReactNode;
}

export interface AmzLoginPagePreviewProps {
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
    actEnterPage: {} | null;
    actExitPage: {} | null;
    actChangePage: {} | null;
    optEnabelAIBot: boolean;
    previewNavigationPanel: boolean;
    previewAIBotPanel: boolean;
    optThemeTokens: string;
    txtCopyright: string;
    wdgBrandLogo: { widgetCount: number; renderer: ComponentType<{ children: ReactNode; caption?: string }> };
    wdgTopTasks: { widgetCount: number; renderer: ComponentType<{ children: ReactNode; caption?: string }> };
    wdgTopNotify: { widgetCount: number; renderer: ComponentType<{ children: ReactNode; caption?: string }> };
    wdgUserMenu: { widgetCount: number; renderer: ComponentType<{ children: ReactNode; caption?: string }> };
    wdgPageNavBar: { widgetCount: number; renderer: ComponentType<{ children: ReactNode; caption?: string }> };
    wdgAIChatBox: { widgetCount: number; renderer: ComponentType<{ children: ReactNode; caption?: string }> };
    wdgMainContent: { widgetCount: number; renderer: ComponentType<{ children: ReactNode; caption?: string }> };
}
