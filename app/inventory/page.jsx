"use client";

import React, { useState } from "react";
import CarListDisplay from "@/components/inventory/CarListDisplay";
import { Select, Row, Col, Slider } from "antd";
import { DownOutlined } from "@ant-design/icons";

const { Option } = Select;

const Inventory = () => {
  const [odometer, setOdometer] = useState([12488, 500289]);
  const [price, setPrice] = useState([0, 50000]);
  const [selectedFilters, setSelectedFilters] = useState({
    year: [],
    make: [],
    exteriorColor: [],
    interiorColor: [],
  });

  const filters = [
    {
      name: "Year",
      options: [
        "2024",
        "2023",
        "2022",
        "2021",
        "2020",
        "2019",
        "2018",
        "2017",
        "2016",
        "2015",
        "2014",
        "2013",
        "2012",
        "2011",
        "2010",
        "2009",
        "2008",
        "2007",
        "2006",
        "2005",
      ],
      stateKey: "year",
    },
    {
      name: "Make",
      options: [
        "Audi",
        "BMW",
        "Cadillac",
        "Ford",
        "HUMMER",
        "Honda",
        "Jeep",
        "Lamborghini",
      ],
      stateKey: "make",
    },
    {
      name: "Exterior Color",
      options: ["Black", "White", "Red", "Blue", "Silver"],
      stateKey: "exteriorColor",
    },
    {
      name: "Interior Color",
      options: ["Black", "White", "Red", "Blue", "Silver"],
      stateKey: "interiorColor",
    },
  ];

  const handleFilterChange = (value, stateKey) => {
    setSelectedFilters((prevFilters) => ({
      ...prevFilters,
      [stateKey]: value,
    }));
  };

  const filtersObject = {
    ...selectedFilters,
    odometer,
    price,
  };

  return (
    <>
      <div>
        <img src="/inventory/inventory_banner.jpg" alt="Inventory Banner" />
      </div>
      <div className="bg-black">
        <div>
          <div className="bg-white px-10 py-5 mx-5 mb-5">
            <Row gutter={[16, 16]}>
              {filters.map((filter) => (
                <Col key={filter.name} xs={24} sm={12} md={8} lg={6}>
                  <Select
                    style={{ width: "100%" }}
                    mode="multiple"
                    placeholder={filter.name}
                    suffixIcon={<DownOutlined />}
                    optionFilterProp="children"
                    filterOption={(input, option) =>
                      option.children
                        .toLowerCase()
                        .indexOf(input.toLowerCase()) >= 0
                    }
                    onChange={(value) =>
                      handleFilterChange(value, filter.stateKey)
                    }
                  >
                    {filter.options.map((option) => (
                      <Option key={option} value={option}>
                        {option}
                      </Option>
                    ))}
                  </Select>
                </Col>
              ))}

              {/* Odometer Slider */}
              <Col xs={24} sm={12} md={8} lg={6}>
                <div style={{ padding: "0 8px" }}>
                  <div style={{ marginBottom: 8 }}>Odometer Range</div>
                  <Slider
                    range
                    min={0}
                    max={1000000}
                    value={odometer}
                    onChange={(value) => setOdometer(value)}
                  />
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      marginTop: 8,
                    }}
                  >
                    <span>{odometer[0]}</span>
                    <span>{odometer[1]}</span>
                  </div>
                </div>
              </Col>

              {/* Price Slider */}
              <Col xs={24} sm={12} md={8} lg={6}>
                <div style={{ padding: "0 8px" }}>
                  <div style={{ marginBottom: 8 }}>Price Range</div>
                  <Slider
                    range
                    min={0}
                    max={100000}
                    value={price}
                    onChange={(value) => setPrice(value)}
                  />
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      marginTop: 8,
                    }}
                  >
                    <span>${price[0]}</span>
                    <span>${price[1]}</span>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        </div>
        {/* Pass filtersObject to CarListDisplay */}
        <CarListDisplay filters={filtersObject} />
      </div>
    </>
  );
};

export default Inventory;
