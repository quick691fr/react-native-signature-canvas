declare module "react-native-signature-canvas" {
  import React from "react";
  import { StyleProp, ViewStyle, DimensionValue } from "react-native";

  type ImageType = "image/png" | "image/jpeg" | "image/svg+xml";

  type DataURL = "Base64" | string;

  type ForwardRef<T, P> = React.ForwardRefExoticComponent<
    React.PropsWithoutRef<P> & React.RefAttributes<T>
  >;

  type SignatureViewProps = {
    androidHardwareAccelerationDisabled?: boolean;
    autoClear?: boolean;
    backgroundColor?: string;
    bgHeight?: | number
    | 'auto'
    | `${number}%`;
    bgWidth?: | number
    | 'auto'
    | `${number}%`;
    bgSrc?: string;
    clearText?: string;
    confirmText?: string;
    customHtml?: (injectedJavaScript: string) => string;
    dataURL?: DataURL;
    descriptionText?: string;
    dotSize?: number;
    imageType?: ImageType;
    minWidth?: number;
    maxWidth?: number;
    minDistance?: number;
    nestedScrollEnabled?: boolean;
    showsVerticalScrollIndicator?: boolean;
    onOK?: (signature: string) => void;
    onEmpty?: () => void;
    onClear?: () => void;
    onUndo?: () => void;
    onRedo?: () => void;
    onDraw?: () => void;
    onErase?: () => void;
    onGetData?: (data: any) => void;
    onChangePenColor?: () => void;
    onChangePenSize?: () => void;
    onBegin?: () => void;
    onEnd?: () => void;
    onLoadEnd?: () => void;
    overlayHeight?: number;
    overlayWidth?: number;
    overlaySrc?: string;
    penColor?: string;
    rotated?: boolean;
    style?: StyleProp<ViewStyle>;
    scrollable?: boolean;
    trimWhitespace?: boolean;
    webStyle?: string;
    webviewContainerStyle?: StyleProp<ViewStyle>;
    androidLayerType?: "none" | "software" | "hardware";
  };

  export type SignatureViewRef = {
    changePenColor: (color: string) => void;
    changePenSize: (minW: number, maxW: number) => void;
    clearSignature: () => void;
    cropWhitespace: (url: string) => void;
    draw: () => void;
    erase: () => void;
    getData: () => void;
    readSignature: () => void;
    undo: () => void;
    redo: () => void;
  };

  const SignatureView: ForwardRef<SignatureViewRef, SignatureViewProps>;
  export default SignatureView;
}
