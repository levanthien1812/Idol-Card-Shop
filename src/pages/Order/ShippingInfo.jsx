import React, { useEffect, useState } from "react";
import {
  FormControl,
  Select,
  Stack,
  TextField,
  Typography,
  MenuItem,
  InputLabel,
} from "@mui/material";
import { getDistricts, getProvinces, getWards } from "../../services";

function ShippingInfo() {
  const bgWhite = { backgroundColor: "white" };
  const [provinces, setProvinces] = useState([]);
  const [provinceChosen, setProvinceChosen] = useState(79);
  const [districts, setDistricts] = useState([]);
  const [districtChosen, setDistrictChosen] = useState(785);
  const [wards, setWards] = useState([]);
  const [wardChosen, setWardChosen] = useState(27595);

  useEffect(() => {
    async function fetchProvinces() {
      const _provinces = await getProvinces();
      setProvinces(_provinces);
    }
    fetchProvinces();
  }, []);

  useEffect(() => {
    async function fetchDistricts() {
      const _districts = await getDistricts(provinceChosen);
      setDistricts(_districts);
      setDistrictChosen(_districts[0].district_id);
    }
    fetchDistricts();
  }, [provinceChosen]);

  useEffect(() => {
    async function fetchWards() {
      const _wards = await getWards(districtChosen);
      setWards(_wards);
      setWardChosen(_wards[0].ward_id);
    }
    fetchWards();
  }, [districtChosen]);

  const provinceChangeHander = (event) => {
    setProvinceChosen(event.target.value);
  };

  const districtChangeHander = (event) => {
    setDistrictChosen(event.target.value);
  };

  const wardChangeHander = (event) => {
    setWardChosen(event.target.value);
  };

  return (
    <Stack
      style={{
        border: "2px solid orange",
        backgroundColor: "#f1edd955",
        marginTop: "16px",
      }}
      padding={3}
      borderRadius={3}
    >
      <Typography fontSize={20} marginBottom={2}>
        Thông tin giao hàng
      </Typography>
      <Stack>
        <Typography marginBottom={1}>Địa chỉ nhận hàng</Typography>
        <Stack direction="row" spacing={1} marginBottom={1}>
          <FormControl fullWidth>
            <InputLabel id="province">Province</InputLabel>
            <Select
              labelId="province"
              id="province"
              size="small"
              label="province"
              style={bgWhite}
              value={provinceChosen}
              onChange={provinceChangeHander}
            >
              {provinces.map((province) => (
                <MenuItem
                  key={province.province_id}
                  value={province.province_id}
                >
                  {province.province_name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <FormControl fullWidth>
            <InputLabel id="district">District</InputLabel>
            <Select
              labelId="district"
              id="district"
              size="small"
              label="district"
              style={bgWhite}
              value={districtChosen}
              onChange={districtChangeHander}
            >
              {districts.map((district) => (
                <MenuItem
                  key={district.district_id}
                  value={district.district_id}
                >
                  {district.district_name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          <FormControl fullWidth>
            <InputLabel id="ward">Ward</InputLabel>
            <Select
              labelId="ward"
              id="ward"
              size="small"
              label="ward"
              style={bgWhite}
              value={wardChosen}
              onChange={wardChangeHander}
            >
              {wards.map((ward) => (
                <MenuItem key={ward.ward_id} value={ward.ward_id}>
                  {ward.ward_name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Stack>
        <TextField
          label="Tên đường và địa chỉ nhà"
          size="small"
          style={bgWhite}
        />

        <Typography marginTop={2} marginBottom={1}>
          Số điện thoại người nhận hàng
        </Typography>
        <TextField
          size="small"
          label="Số điện thoại"
          style={bgWhite}
        ></TextField>
      </Stack>
    </Stack>
  );
}

export default ShippingInfo;
