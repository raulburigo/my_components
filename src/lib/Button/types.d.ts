export declare const variantOptions: readonly ["primary", "secondary", "cancel"];
declare type Variant = typeof variantOptions[number];
export declare const DEFAULT_BUTTON_VARIANT: Variant;
export declare const sizeOptions: readonly ["xs", "sm", "md", "lg"];
declare type Size = typeof sizeOptions[number];
export declare const DEFAULT_BUTTON_SIZE: Size;
interface IButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: Variant;
    size?: Size;
}
export type { IButtonProps };
