import { Children, forwardRef } from "react";
import { ClearSlots, augmentElement, createEmbeddableAdapter, mergeProps, omitProps, useSlotProps } from "../../shared";
import { EmbeddedIcon } from "../../icons";
import { any, bool, elementType, func, number, oneOf, oneOfType, string } from "prop-types";
import { useButton } from "./useButton";
import { useToolbarProps } from "../../toolbar";

const propTypes = {
    /**
     * The button style to use.
     */
    variant: oneOf(["solid", "outline", "ghost"]),
    /**
     * The button color accent.
     */
    color: oneOf(["primary", "secondary", "danger", "inherit"]),
    /**
     * The button shape.
     */
    shape: oneOf(["rounded", "circular"]),
    /**
     * Whether or not the button content should takes additional space.
     */
    condensed: bool,
    /**
     * Whether the button should autoFocus on render.
     */
    autoFocus: bool,
    /**
     * The delay before trying to autofocus.
     */
    autoFocusDelay: number,
    /**
     * A button can show a loading indicator.
     */
    loading: bool,
    /**
     * A button can vary in size.
     */
    size: oneOf(["2xs", "xs", "sm", "md", "lg"]),
    /**
     * The button type.
     */
    type: oneOf(["button", "submit", "reset"]),
    /**
     * Called when the button is click.
     * @param {SyntheticEvent} event - React's original SyntheticEvent.
     * @returns {void}
     */
    onClick: func,
    /**
     * A label providing an accessible name to the button. See [WCAG](https://www.w3.org/TR/WCAG20-TECHS/ARIA14.html).
     */
    "aria-label": string.isRequired,
    /**
     * An HTML element type or a custom React element type to render as.
     */
    as: oneOfType([string, elementType]),
    /**
     * Default slot override.
     */
    slot: string,
    /**
     * @ignore
     */
    children: any.isRequired
};

export function InnerIconButton({ slot, ...props }) {
    const [slotProps] = useSlotProps(slot ?? "button");
    const [toolbarProps] = useToolbarProps();

    const {
        variant = "solid",
        color,
        shape = "circular",
        condensed,
        autoFocus,
        autoFocusDelay,
        fluid,
        loading,
        size,
        active,
        focus,
        hover,
        type = "button",
        title,
        as: ElementType = "button",
        "aria-label": ariaLabel,
        className,
        children,
        forwardedRef,
        ...rest
    } = mergeProps(
        props,
        slotProps,
        omitProps(toolbarProps, ["orientation"])
    );

    const buttonProps = useButton({
        cssModule: "o-ui-icon-button",
        variant,
        color,
        shape,
        autoFocus,
        autoFocusDelay,
        fluid,
        loading,
        size,
        active,
        focus,
        hover,
        type,
        className,
        forwardedRef
    });

    const icon = Children.only(children);

    const iconMarkup = augmentElement(condensed ? icon : <EmbeddedIcon>{icon}</EmbeddedIcon>, {
        size,
        className: "o-ui-button-icon"
    });

    return (
        <ElementType
            data-testid="icon-button"
            {...rest}
            {...buttonProps}
            title={title ?? ariaLabel}
            aria-label={ariaLabel}
        >
            <ClearSlots>
                {iconMarkup}
            </ClearSlots>
        </ElementType>
    );
}

InnerIconButton.propTypes = propTypes;

export const IconButton = forwardRef((props, ref) => (
    <InnerIconButton {...props} forwardedRef={ref} />
));

export const embedIconButton = createEmbeddableAdapter({
    "sm": "2xs",
    "md": "xs",
    "lg": "sm"
});
