/**
 * Handling minor UX variations in the component by toggling ON/OFF features.
 *
 * Modify the component to take in a prop to control it’s behavior.
 *
 * Gotcha:
 * Easy to overuse this idea by adding props for  every variation.
 * Only add in props for features specific to the current feature that the component.
 * Basically, not violate the Single Responsibility Principle.
 *
 * @Reference:
 * https://speakerdeck.com/vasa/building-multitenant-ui-with-react-dot-js
 *
 */

/**
 * Example
 * Show/Hide password feature in Login form
 */

class PasswordField extends Component {
  render() {
    const {password, showHidePassword, showErrorOnTop, showLabels, shouldComplyAda} = this.props;
    return (
      <div>
        <Password
          field={password}
          label="Password"
          showErrorOnTop={showErrorOnTop}
          placeholder={shouldComplyAda ? "" : "Password"}
          showLabel={showLabels}
          showHidePassword={showHidePassword}
        />
      </div>
    );
  }
}

