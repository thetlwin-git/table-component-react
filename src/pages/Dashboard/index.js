import PropTypes from "prop-types";
import React, { useMemo, useEffect, useState } from "react";
import "react-super-responsive-table/dist/SuperResponsiveTableStyle.css";
import { Card, CardBody } from "reactstrap";
import SelectTableComponent from "../../components/common/SelectTableComponent";
import SortTable from "../../components/common/SortTable";
import SimpleTable from "../../components/common/SimpleTable";

import "./dashboard.scss";
import { connect } from "react-redux";

const Dashboard = props => {

  const columns = useMemo(
    () => [
      {
        id: 1,
        Header: 'Name',
        accessor: 'name',
      },
      {
        id: 2,
        Header: 'Position',
        accessor: 'position'
      },
      {
        id: 3,
        Header: 'Age',
        accessor: 'age'
      },
      {
        id: 4,
        Header: 'Office',
        accessor: 'office'
      },
      {
        id: 5,
        Header: 'Start date',
        accessor: 'startDate'
      },
      {
        id: 6,
        Header: 'Salary',
        accessor: 'salary'
      },
    ],
    []
  );

  const dataList = [
    {
      "id": 1,
      "name": "Jennifer Chang",
      "position": "Regional Director",
      "age": 28,
      "office": "Singapore",
      "startDate": "2010/11/14",
      "salary": "$357,650",
      "selected": false,
    },
    {
      "id": 2,
      "name": "Gavin Joyce",
      "position": "Developer",
      "age": 42,
      "office": "Edinburgh",
      "startDate": "2010/12/22",
      "salary": "$92,575",
      "selected": false,
    },
    {
      "id": 3,
      "name": "Angelica Ramos",
      "position": "Chief Executive Officer (CEO)",
      "age": 47,
      "office": "London",
      "startDate": "2009/10/09",
      "salary": "$1,200,000",
      "selected": false,
    },
    {
      "id": 4,
      "name": "Doris Wilder",
      "position": "Sales Assistant",
      "age": 23,
      "office": "Sidney",
      "startDate": "2010/09/20",
      "salary": "$85,600",
      "selected": false,
    },
    {
      "id": 5,
      "name": "Caesar Vance",
      "position": "Pre-Sales Support",
      "age": 21,
      "office": "New York",
      "startDate": "2011/12/12",
      "salary": "$106,450",
      "selected": false,
    },
    // {
    //   "id": 6,
    //   "name": "Yuri Berry",
    //   "position": "Chief Marketing Officer (CMO)",
    //   "age": 40,
    //   "office": "New York",
    //   "startDate": "2009/06/25",
    //   "salary": "$675,000",
    //   "selected": false,
    // },
    // {
    //   "id": 7,
    //   "name": "Jenette Caldwell",
    //   "position": "Development Lead",
    //   "age": 30,
    //   "office": "New York",
    //   "startDate": "2011/09/03",
    //   "salary": "$345,000",
    //   "selected": false,
    // },
    // {
    //   "id": 8,
    //   "name": "Dai Rios",
    //   "position": "Personnel Lead",
    //   "age": 35,
    //   "office": "Edinburgh",
    //   "startDate": "2012/09/26",
    //   "salary": "$217,500",
    //   "selected": false,
    // },
    // {
    //   "id": 9,
    //   "name": "Bradley Greer",
    //   "position": "Software Engineer",
    //   "age": 41,
    //   "office": "London",
    //   "startDate": "2012/10/13",
    //   "salary": "$132,000",
    //   "selected": false,
    // },
    // {
    //   "id": 10,
    //   "name": "Gloria Little",
    //   "position": "Systems Administrator",
    //   "age": 59,
    //   "office": "New York",
    //   "startDate": "2009/04/10",
    //   "salary": "$237,500",
    //   "selected": false,
    // },
    // {
    //   "id": 11,
    //   "name": "Paul Byrd",
    //   "position": "Chief Financial Officer (CFO)",
    //   "age": 64,
    //   "office": "New York",
    //   "startDate": "2010/06/09",
    //   "salary": "$725,000",
    //   "selected": false,
    // },
    // {
    //   "id": 12,
    //   "name": "Michael Silva",
    //   "position": "Marketing Designer",
    //   "age": 66,
    //   "office": "London",
    //   "startDate": "2012/11/27",
    //   "salary": "$198,500",
    //   "selected": false,
    // },
    // {
    //   "id": 13,
    //   "name": "Tatyana Fitzpatrick",
    //   "position": "Regional Director",
    //   "age": 19,
    //   "office": "London",
    //   "startDate": "2010/03/17",
    //   "salary": "$385,750",
    //   "selected": false,
    // },
    // {
    //   "id": 14,
    //   "name": "Haley Kennedy",
    //   "position": "Senior Marketing Designer",
    //   "age": 43,
    //   "office": "London",
    //   "startDate": "2012/12/18",
    //   "salary": "$313,500",
    //   "selected": false,
    // },
    // {
    //   "id": 15,
    //   "name": "Charde Marshall",
    //   "position": "SRegional Director",
    //   "age": 36,
    //   "office": "San Francisco",
    //   "startDate": "2008/10/16",
    //   "salary": "$470,600",
    //   "selected": false,
    // },
    // {
    //   "id": 16,
    //   "name": "Quinn Flynn",
    //   "position": "Support Lead",
    //   "age": 22,
    //   "office": "Edinburgh",
    //   "startDate": "2013/03/03",
    //   "salary": "$342,000",
    //   "selected": false,
    // },
    // {
    //   "id": 17,
    //   "name": "Jena Gaines",
    //   "position": "Office Manager",
    //   "age": 30,
    //   "office": "London",
    //   "startDate": "2008/12/19",
    //   "salary": "$90,560",
    //   "selected": false,
    // },
    // {
    //   "id": 18,
    //   "name": "Sonya Frost",
    //   "position": "Software Engineer",
    //   "age": 23,
    //   "office": "Edinburgh",
    //   "startDate": "2008/12/13",
    //   "salary": "$103,600",
    //   "selected": false,
    // },
    // {
    //   "id": 19,
    //   "name": "Colleen Hurst",
    //   "position": "Javascript Developer",
    //   "age": 39,
    //   "office": "San Francisco",
    //   "startDate": "2009/09/15",
    //   "salary": "$205,500",
    //   "selected": false,
    // },
    // {
    //   "id": 20,
    //   "name": "Rhona Davidson",
    //   "position": "Integration Specialist",
    //   "age": 55,
    //   "office": "Tokyo",
    //   "startDate": "2010/10/14",
    //   "salary": "$327,900",
    //   "selected": false,
    // },
    // {
    //   "id": 21,
    //   "name": "Herrod Chandler",
    //   "position": "Sales Assistant",
    //   "age": 59,
    //   "office": "San Francisco",
    //   "startDate": "2012/08/06",
    //   "salary": "$137,500",
    //   "selected": false,
    // },
    // {
    //   "id": 22,
    //   "name": "Brielle Williamson",
    //   "position": "Integration Specialist",
    //   "age": 62,
    //   "office": "New York",
    //   "startDate": "2012/12/02",
    //   "salary": "$372,000",
    //   "selected": false,
    // },
    // {
    //   "id": 23,
    //   "name": "Airi Satou",
    //   "position": "Accountant",
    //   "age": 33,
    //   "office": "Tokyo",
    //   "startDate": "2008/11/28",
    //   "salary": "$162,700",
    //   "selected": false,
    // },
    // {
    //   "id": 24,
    //   "name": "Cedric Kelly",
    //   "position": "Senior Javascript Developer",
    //   "age": 22,
    //   "office": "Edinburgh",
    //   "startDate": "2012/03/29",
    //   "salary": "$433,060",
    //   "selected": false,
    // },
    // {
    //   "id": 25,
    //   "name": "Ashton Cox",
    //   "position": "Junior Technical Author",
    //   "age": 66,
    //   "office": "San Francisco",
    //   "startDate": "2009/01/12",
    //   "salary": "$86,000",
    //   "selected": false,
    // },
    // {
    //   "id": 26,
    //   "name": "Garrett Winters",
    //   "position": "Accountant",
    //   "age": 63,
    //   "office": "Tokyo",
    //   "startDate": "2011/07/25",
    //   "salary": "$170,750",
    //   "selected": false,
    // },
    // {
    //   "id": 27,
    //   "name": "Tiger Nixon",
    //   "position": "System Architect",
    //   "age": 61,
    //   "office": "Edinburgh",
    //   "startDate": "2011/04/25",
    //   "salary": "$320,800",
    //   "selected": false,
    // },
  ];

  document.title = "Dashboard | Table Components";

  return (
    <React.Fragment>
      <div className="page-content">
        <div className="container-fluid">

          <p className="lead">
            This is the various use cases of table components.
          </p>
          <hr />
          <h2 className="d-md-block">Table</h2>
          <Card className="card-rounded">
            <CardBody className="p-0">
              <SimpleTable id="simple-table" columns={columns} data={dataList} />
            </CardBody>
          </Card>

          <h2>Table with Sorting</h2>
          <Card className="card-rounded">
            <CardBody className="p-0">
              <SortTable id="sort-table" columns={columns} data={dataList} />
            </CardBody>
          </Card>

          <h2>Table with Checkbox</h2>
          <Card className="card-rounded">
            <CardBody className="p-0">
              <SelectTableComponent id="select-checkbox-table" columns={columns} data={dataList} mode="checkbox"></SelectTableComponent>
            </CardBody>
          </Card>

          <h1>Table with Radio Button</h1>
          <Card className="card-rounded">
            <CardBody className="p-0">
              <SelectTableComponent id="select-option-table" columns={columns} data={dataList} mode="radio"></SelectTableComponent>
            </CardBody>
          </Card>
        </div>
      </div>
    </React.Fragment >
  );
};

Dashboard.propTypes = {
  t: PropTypes.any,
  data: PropTypes.any,
  onGetDashboardData: PropTypes.func,
};

const mapStateToProps = state => {
  return { ...state.Layout };
};

export default connect(mapStateToProps, null)(Dashboard);