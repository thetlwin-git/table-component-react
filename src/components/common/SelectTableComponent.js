import React from "react";
import { Table, Thead, Tbody, Tr, Th, Td } from "react-super-responsive-table";
import "./CustomCheckboxOption.scss";

class SelectTableComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            columns: this.props.columns,
            data: this.props.data,
            mode: this.props.mode,
            MasterChecked: false,
            SelectedList: [],
        };

        this.onChange = this.onChange.bind(this);
        this.onItemChange = this.onItemChange.bind(this);
    }

    onChange(e) {
        console.log('event', e)
        this.onMasterCheck(e);
    }

    onItemChange(e, data) {
        console.log('item event', e)
        this.onItemCheck(e, data);
    }

    onMasterCheck(e) {
        let tempList = this.state.data;
        tempList.map((item) => (item.selected = e.target.checked));

        this.setState({
            MasterChecked: e.target.checked,
            List: tempList,
            SelectedList: this.state.data.filter((e) => e.selected),
        });
    }

    onItemCheck(e, item) {
        let tempList = this.state.data;
        const currentMode = this.state.mode;

        tempList.map((data) => {
            if (data.id === item.id) {
                data.selected = e.target.checked;
            } else if (currentMode == "radio") {
                data.selected = null;
            }
            return data;
        });

        const totalItems = this.state.data.length;
        const totalCheckedItems = tempList.filter((e) => e.selected).length;

        this.setState({
            MasterChecked: totalItems === totalCheckedItems,
            data: tempList,
            SelectedList: this.state.data.filter((e) => e.selected),
        });
    }

    getSelectedRows() {
        this.setState({
            SelectedList: this.state.data.filter((e) => e.selected),
        });
    }

    render() {
        const selectMode = this.state.mode;

        let masterCheckbox;
        if (selectMode == "checkbox") {
            // masterCheckbox = <input
            //     type="checkbox"
            //     className="form-check-input"
            //     checked={this.state.MasterChecked}
            //     id="mastercheck"
            //     onChange={(e) => this.onMasterCheck(e)}
            // />
            masterCheckbox = <label>
                <input
                    type="checkbox"
                    id="mastercheck"
                    checked={this.state.MasterChecked}
                    onChange={(e) => this.onMasterCheck(e)}
                />
                <span
                    className={`checkbox ${this.state.MasterChecked ? "checkbox--active" : ""}`}
                    aria-hidden="true"
                />
            </label>
        }

        return (
            <div className="table-rep-plugin">
                <div className="table-responsive mb-0" data-pattern="priority-columns" >
                    <Table id="select-table" className="table">
                        <Thead>
                            <Tr>
                                <Th scope="col">
                                    {masterCheckbox}
                                </Th>
                                {this.state.columns.map(col => (
                                    <Th key={col.id} data-priority={col.id} scope="col">
                                        <span className="avenir-h">{col.Header}</span>
                                    </Th>
                                ))}
                            </Tr>
                        </Thead>
                        <Tbody>
                            {this.state.data.map(data => (
                                <Tr key={data.id} className={data.selected ? 'selected' : null}>
                                    <Th scope="row">
                                        {/* <input
                                            type={selectMode == 'checkbox' ? "checkbox" : "radio"}
                                            checked={data.selected}
                                            className="form-check-input"
                                            id="rowcheck{data.id}"
                                            onChange={(e) => this.onItemCheck(e, data)}
                                        /> */}
                                        <label>
                                            <input
                                                type={selectMode == 'checkbox' ? "checkbox" : "radio"}
                                                id="rowcheck{data.id}"
                                                checked={data.selected}
                                                onChange={(e) => this.onItemCheck(e, data)}
                                            />
                                            <span
                                                className={`${selectMode == 'checkbox' ? "checkbox" : "radio"} ${data.selected ? selectMode == 'checkbox' ? "checkbox--active" : "radio--active" : ""}`}
                                                aria-hidden="true"
                                            />
                                        </label>
                                    </Th>
                                    <Td scope="row"><span className="avenir-b">{data.name}</span></Td>
                                    <Td scope="row"><span className="avenir-b">{data.position}</span></Td>
                                    <Td scope="row"><span className="avenir-b">{data.age}</span></Td>
                                    <Td scope="row"><span className="avenir-b">{data.office}</span></Td>
                                    <Td scope="row"><span className="avenir-b">{data.startDate}</span></Td>
                                    <Td scope="row"><span className="avenir-b">{data.salary}</span></Td>
                                </Tr>
                            ))}
                        </Tbody>
                    </Table>
                </div>
            </div>
        );
    }
}

export default SelectTableComponent;