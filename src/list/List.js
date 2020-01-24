import React, {Component} from "react";
import PropTypes from "prop-types";
import {List as ListDHX, DataCollection} from "dhx-suite";
import "dhx-suite/codebase/suite.min.css";

class List extends Component {
	componentDidMount() {
		this.list = new ListDHX(this.el, {
			css: "dhx_widget--bordered dhx_widget--bg_white",
			template: item => `<span><strong>${item.title}</strong> ${item.short}</span>`,
			height: 300
		});
		this.list.data.load(`${process.env.PUBLIC_URL}/static/dataview.json`);
	}

	componentWillUnmount() {
		this.list.destructor();
	}

	render() {
		return (
			<div ref={el => this.el = el}></div>
		);
	}
}

List.propTypes = {
	data: PropTypes.oneOfType([
		PropTypes.array,
		PropTypes.instanceOf(DataCollection)
	]),
	template: PropTypes.func,
	keyNavigation: PropTypes.bool,
	css: PropTypes.string,
	virtual: PropTypes.bool,
	height: PropTypes.number,
	itemHeight: PropTypes.number
};

export default List;
