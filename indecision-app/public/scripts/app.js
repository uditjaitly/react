"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Indecision = function (_React$Component) {
    _inherits(Indecision, _React$Component);

    function Indecision(props) {
        _classCallCheck(this, Indecision);

        var _this = _possibleConstructorReturn(this, (Indecision.__proto__ || Object.getPrototypeOf(Indecision)).call(this, props));

        _this.title = "Indecision App";
        _this.subtitle = "Let the computer make the decision for you";
        _this.state = {
            options: ["one", "two"]
        };
        _this.onRemoveHandler = _this.onRemoveHandler.bind(_this);
        _this.onActionAdd = _this.onActionAdd.bind(_this);
        _this.onActionHandler = _this.onActionHandler.bind(_this);
        _this.onDeleteHandler = _this.onDeleteHandler.bind(_this);
        return _this;
    }

    _createClass(Indecision, [{
        key: "onActionHandler",
        value: function onActionHandler() {
            var randTask = Math.floor(Math.random() * this.state.options.length);
            var task = this.state.options[randTask];
            alert(task);
        }
    }, {
        key: "onRemoveHandler",
        value: function onRemoveHandler() {
            this.setState(function () {
                return {
                    options: []
                };
            });
        }
    }, {
        key: "onActionAdd",
        value: function onActionAdd(item) {
            if (this.state.options.indexOf(item) > -1) {
                return "Please Enter A Non Duplicate Item";
            }
            this.setState(function (prevState) {

                return {
                    options: prevState.options.concat(item)
                };
            });
        }
    }, {
        key: "onDeleteHandler",
        value: function onDeleteHandler(optionToDelete) {
            this.setState(function (prevState) {
                return {
                    options: prevState.options.filter(function (option) {
                        return option != optionToDelete;
                    })
                };
            });
        }
    }, {
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                null,
                React.createElement(Header, {
                    title: this.title,
                    subtitle: this.subtitle
                }),
                React.createElement(Action, {
                    onAction: this.onActionHandler,
                    onRemove: this.onRemoveHandler,
                    noOptions: this.state.options.length <= 0
                }),
                React.createElement(Options, {
                    options: this.state.options,
                    onDeleteOne: this.onDeleteHandler
                }),
                React.createElement(AddOptions, {
                    onAdd: this.onActionAdd
                })
            );
        }
    }]);

    return Indecision;
}(React.Component);

var Header = function Header(props) {
    return React.createElement(
        "div",
        null,
        React.createElement(
            "h1",
            null,
            " ",
            props.title
        ),
        React.createElement(
            "h2",
            null,
            props.subtitle
        )
    );
};

var Action = function (_React$Component2) {
    _inherits(Action, _React$Component2);

    function Action() {
        _classCallCheck(this, Action);

        return _possibleConstructorReturn(this, (Action.__proto__ || Object.getPrototypeOf(Action)).apply(this, arguments));
    }

    _createClass(Action, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                null,
                React.createElement(
                    "button",
                    { disabled: this.props.noOptions, onClick: this.props.onAction },
                    "Pick a random task"
                ),
                React.createElement(
                    "button",
                    { onClick: this.props.remove },
                    "Remove all options"
                )
            );
        }
    }]);

    return Action;
}(React.Component);

var Options = function (_React$Component3) {
    _inherits(Options, _React$Component3);

    function Options() {
        _classCallCheck(this, Options);

        return _possibleConstructorReturn(this, (Options.__proto__ || Object.getPrototypeOf(Options)).apply(this, arguments));
    }

    _createClass(Options, [{
        key: "render",
        value: function render() {
            var _this4 = this;

            return React.createElement(
                "div",
                null,
                this.props.options.map(function (option) {
                    return React.createElement(Option, { key: option, option: option, onDeleteOne: _this4.props.onDeleteOne });
                })
            );
        }
    }]);

    return Options;
}(React.Component);

var Option = function (_React$Component4) {
    _inherits(Option, _React$Component4);

    function Option(props) {
        _classCallCheck(this, Option);

        var _this5 = _possibleConstructorReturn(this, (Option.__proto__ || Object.getPrototypeOf(Option)).call(this, props));

        _this5.delete = _this5.delete.bind(_this5);
        return _this5;
    }

    _createClass(Option, [{
        key: "delete",
        value: function _delete(e) {
            this.props.onDeleteOne(this.props.option);
        }
    }, {
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                null,
                this.props.option,
                React.createElement(
                    "button",
                    { onClick: this.delete },
                    "x"
                )
            );
        }
    }]);

    return Option;
}(React.Component);

var AddOptions = function (_React$Component5) {
    _inherits(AddOptions, _React$Component5);

    function AddOptions(props) {
        _classCallCheck(this, AddOptions);

        var _this6 = _possibleConstructorReturn(this, (AddOptions.__proto__ || Object.getPrototypeOf(AddOptions)).call(this, props));

        _this6.addingOption = _this6.addingOption.bind(_this6);
        return _this6;
    }

    _createClass(AddOptions, [{
        key: "addingOption",
        value: function addingOption(e) {
            e.preventDefault();
            var item = e.target.elements.optionText.value.trim();
            if (item) {
                var error = this.props.onAdd(item);
                e.target.elements.optionText.value = "";
                if (error) {
                    alert(error);
                }
            }
        }
    }, {
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                null,
                React.createElement(
                    "form",
                    { onSubmit: this.addingOption },
                    React.createElement("input", { type: "text", name: "optionText" }),
                    React.createElement(
                        "button",
                        null,
                        "Add"
                    )
                )
            );
        }
    }]);

    return AddOptions;
}(React.Component);

ReactDOM.render(React.createElement(Indecision, null), document.getElementById("app"));
