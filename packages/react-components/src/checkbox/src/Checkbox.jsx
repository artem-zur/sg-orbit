import "./Checkbox.css";

import { SlotProvider, Wrap, mergeProps, omitProps, useCheckableProps, useEventCallback, useRenderProps } from "../../shared";
import { Text } from "../../text";
import { VisuallyHidden } from "../../visually-hidden";
import { any, bool, elementType, func, number, oneOf, oneOfType, string } from "prop-types";
import { embeddedIconSize } from "../../icons";
import { forwardRef } from "react";
import { isNil } from "lodash";
import { useCheckbox } from "./useCheckbox";
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
     * A controlled indeterminate state value.
     */
    indeterminate: bool,
    /**
     * The initial value of `indeterminate`.
     */
    defaultIndeterminate: bool,
    /**
     * The value to associate with when in a group.
     */
    value: oneOfType([string, number]),
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
     * Called when the checkbox checked state change.
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

export function InnerCheckbox(props) {
    const [checkableProps] = useCheckableProps(props);
    const [fieldProps, isInField] = useFieldInputProps();
    const [toolbarProps] = useToolbarProps();

    const {
        id,
        checked,
        defaultChecked,
        indeterminate,
        defaultIndeterminate,
        value,
        autoFocus,
        autoFocusDelay,
        required,
        validationState,
        onChange,
        onCheck,
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
        omitProps(props, ["role"]),
        checkableProps,
        omitProps(toolbarProps, ["orientation"]),
        omitProps(fieldProps, ["fluid"])
    );

    const handleCheck = useEventCallback(event => {
        onCheck(event, value);
    });

    const {
        isChecked,
        isIndeterminate,
        wrapperProps,
        inputProps
    } = useCheckbox({
        cssModule: "o-ui-checkbox",
        isInField,
        id,
        checked,
        defaultChecked,
        indeterminate,
        defaultIndeterminate,
        autoFocus,
        autoFocusDelay,
        required,
        validationState,
        onChange: !isNil(onCheck) ? handleCheck : onChange,
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

    const content = useRenderProps({ isChecked, isIndeterminate }, props, children);

    return (
        <ElementType
            data-testid="checkbox"
            {...rest}
            {...wrapperProps}
        >
            <VisuallyHidden {...inputProps} />
            <span className="o-ui-checkbox-box" />
            <SlotProvider
                value={{
                    text: {
                        size,
                        className: "o-ui-checkbox-label"
                    },
                    icon: {
                        size: embeddedIconSize(size),
                        className: "o-ui-checkbox-icon"
                    },
                    counter: {
                        size,
                        reverse,
                        className: "o-ui-checkbox-counter"
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

InnerCheckbox.propTypes = propTypes;

export const Checkbox = forwardRef((props, ref) => (
    <InnerCheckbox {...props} forwardedRef={ref} />
));
