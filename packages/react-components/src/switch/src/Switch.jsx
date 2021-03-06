import "./Switch.css";

import { SlotProvider, Wrap, mergeProps, omitProps, useRenderProps } from "../../shared";
import { Text } from "../../text";
import { VisuallyHidden } from "../../visually-hidden";
import { any, bool, elementType, func, number, oneOf, oneOfType, string } from "prop-types";
import { embeddedIconSize } from "../../icons";
import { forwardRef } from "react";
import { useCheckbox } from "../../checkbox";
import { useFieldInputProps } from "../../field";
import { useToolbarProps } from "../../toolbar";

const propTypes = {
    /**
     * A controlled checked state value.
     */
    checked: bool,
    /**
     * The initial value of `checked` when uncontrolled.
     */
    defaultChecked: bool,
    /**
     * Whether the checkbox should autoFocus on render.
     */
    autoFocus: bool,
    /**
     * The delay before trying to autofocus.
     */
    autoFocusDelay: number,
    /**
     * Whether a user input is required before form submission.
     */
    required: bool,
    /**
     * Whether the checkbox should display as "valid" or "invalid".
     */
    validationState: oneOf(["valid", "invalid"]),
    /**
     * A checkbox can vary in size.
     */
    size: oneOf(["sm", "md", "lg"]),
    /**
     * Invert the order the checkmark box and the label.
     */
    reverse: bool,
    /**
     * Called when the switch checked state change.
     * @param {SyntheticEvent} event - React's original SyntheticEvent.
     * @returns {void}
     */
    onChange: func,
    /**
     * An HTML element type or a custom React element type to render as.
     */
    as: oneOfType([string, elementType]),
    /**
     * Component children.
     */
    children: oneOfType([any, func])
};

export function InnerSwitch(props) {
    const [toolbarProps] = useToolbarProps();
    const [fieldProps, isInField] = useFieldInputProps();

    const {
        id,
        checked,
        defaultChecked,
        autoFocus,
        autoFocusDelay,
        required,
        validationState,
        onChange,
        size,
        reverse,
        name,
        tabIndex,
        active,
        focus,
        hover,
        disabled,
        as: ElementType = "label",
        className,
        children,
        forwardedRef,
        ...rest
    } = mergeProps(
        props,
        omitProps(toolbarProps, ["orientation"]),
        fieldProps
    );

    const {
        isChecked,
        wrapperProps,
        inputProps
    } = useCheckbox({
        cssModule: "o-ui-switch",
        isInField,
        id,
        checked,
        defaultChecked,
        autoFocus,
        autoFocusDelay,
        required,
        validationState,
        onChange,
        size,
        reverse,
        name,
        tabIndex,
        active,
        focus,
        hover,
        disabled,
        className,
        forwardedRef
    });

    const content = useRenderProps({ isChecked }, props, children);

    return (
        <ElementType
            data-testid="switch"
            {...rest}
            {...wrapperProps}
        >
            <VisuallyHidden {...inputProps} />
            <span className="o-ui-switch-control" />
            <SlotProvider
                value={{
                    text: {
                        size,
                        className: "o-ui-switch-label"
                    },
                    icon: {
                        size: embeddedIconSize(size),
                        className: "o-ui-switch-icon"
                    },
                    counter: {
                        size,
                        reverse,
                        className: "o-ui-switch-counter"
                    }
                }}
            >
                <Wrap as={Text}>
                    {content}
                </Wrap>
            </SlotProvider>
        </ElementType>
    );
}

InnerSwitch.propTypes = propTypes;

export const Switch = forwardRef((props, ref) => (
    <InnerSwitch {...props} forwardedRef={ref} />
));

export const Toggle = Switch;
