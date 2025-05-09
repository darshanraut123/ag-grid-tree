import React, { useMemo, useRef, useState } from "react";
import { AgGridReact } from "ag-grid-react";
import {
  ClientSideRowModelModule,
  ModuleRegistry,
  RowSelectionOptions,
} from "ag-grid-community";
import {
  AllEnterpriseModule,
  LicenseManager,
  TreeDataModule,
} from "ag-grid-enterprise";
import "./custom-tree-grid.css";
import { ThemeContext } from "../../context/modal-context";
import { Box, Button } from "@mui/material";

ModuleRegistry.registerModules([AllEnterpriseModule]);
LicenseManager.setLicenseKey(
  "[TRIAL]_this_{AG_Charts_and_AG_Grid}_Enterprise_key_{AG-078794}_is_granted_for_evaluation_only___Use_in_production_is_not_permitted___Please_report_misuse_to_legal@ag-grid.com___For_help_with_purchasing_a_production_key_please_contact_info@ag-grid.com___You_are_granted_a_{Single_Application}_Developer_License_for_one_application_only___All_Front-End_JavaScript_developers_working_on_the_application_would_need_to_be_licensed___This_key_will_deactivate_on_{14 April 2025}____[v3]_[0102]_MTc0NDU4NTIwMDAwMA==0e65fd8a353058a58afb8d7be064e726"
);

// Register AG Grid modules
ModuleRegistry.registerModules([ClientSideRowModelModule, TreeDataModule]);

export default function GridExample() {
  const gridRef = useRef<AgGridReact>(null);

  const { setShowModal }: any = React.useContext(ThemeContext);

  const [treeData, setTreeData] = useState([
    {
      path: ["ABC 123"],
      custom: {
        endure: false,
        broker: false,
        inbound: false,
        outbound: false,
      },
      Select: false,
      source: "ETRM",
      etrmId: "ABC 123",
      tradeDate: "2/23/2025",
      etrmBuyerCounterpartyId: "Shell",
      etrmSellerCounterpartyId: "Freepoint",
      sellerTraderName: "Rama",
      buyerTraderName: "Vinnie",
      totalQuantity: 30000,
      startDate: "4/1/2025",
      endDate: "4/30/2025",
      contractDate: "2/24/2025",
      etrmBrokerId: "NNNN",
      masterContractType: "NAESB",
      tradeType: "FP",
      settlementCurrency: "USD",
      pricePrecision: 4,
      priceCurrency: "USD",
      priceUnit: "MMBTU",
      quantityUnit: "MMBTU",
      quantityFrequency: "Daily",
      quantity: 1000,
      fixedPrice: 4.123,
      version: "1",
      "Contract Status": "Active",
      isMismatch: true,
      mismatchedFields: [],
    },
    {
      path: ["ABC 123", "Endur"],
      Select: false,
      source: "Endur",
      etrmId: "ABC 123",
      tradeDate: "2/23/2025",
      etrmBuyerCounterpartyId: "Shell",
      etrmSellerCounterpartyId: "Freepoint",
      sellerTraderName: "Rama",
      buyerTraderName: "Vinnie",
      totalQuantity: 30000,
      startDate: "4/1/2025",
      endDate: "4/30/2025",
      contractDate: "2/24/2025",
      etrmBrokerId: "NNNN",
      masterContractType: "NAESB",
      tradeType: "FP",
      settlementCurrency: "USD",
      pricePrecision: 4,
      priceCurrency: "USD",
      priceUnit: "MMBTU",
      quantityUnit: "MMBTU",
      quantityFrequency: "Daily",
      quantity: 1000,
      fixedPrice: 4.123,
      version: "1",
      "Contract Status": "Active",
      isMismatch: true,
      mismatchedFields: ["source"],
    },
    {
      path: ["ABC 123", "Outbound"],
      Select: false,
      source: "Outbound",
      etrmId: "ABC 123",
      tradeDate: "2/23/2025",
      etrmBuyerCounterpartyId: "Shell",
      etrmSellerCounterpartyId: "Freepoint",
      sellerTraderName: "Rama",
      buyerTraderName: "Vinnie",
      totalQuantity: 30000,
      startDate: "4/1/2025",
      endDate: "4/30/2025",
      contractDate: "2/24/2025",
      etrmBrokerId: "NNNN",
      masterContractType: "NAESB",
      tradeType: "FP",
      settlementCurrency: "USD",
      pricePrecision: 4,
      priceCurrency: "USD",
      priceUnit: "MMBTU",
      quantityUnit: "MMBTU",
      quantityFrequency: "Daily",
      quantity: 1000,
      fixedPrice: 4.123,
      version: "1",
      "Contract Status": "Active",
      isMismatch: true,
      mismatchedFields: ["source"],
    },
    {
      path: ["ABC 123", "Inbound"],
      Select: false,
      source: "Inbound",
      etrmId: "TC-12345",
      tradeDate: "2/23/2025",
      etrmBuyerCounterpartyId: "Shell",
      etrmSellerCounterpartyId: "Freepoint",
      sellerTraderName: "Rama",
      buyerTraderName: "Vinnie",
      totalQuantity: 30000,
      startDate: "4/1/2025",
      endDate: "4/30/2025",
      contractDate: "2/24/2025",
      etrmBrokerId: "NNNN",
      masterContractType: "NAESB",
      tradeType: "FP",
      settlementCurrency: "USD",
      pricePrecision: 4,
      priceCurrency: "USD",
      priceUnit: "MMBTU",
      quantityUnit: "MMBTU",
      quantityFrequency: "Daily",
      quantity: 1000,
      fixedPrice: 4.123,
      version: "1",
      "Contract Status": "Active",
      isMismatch: true,
      mismatchedFields: ["etrmId", "source"],
    },
    {
      path: ["ABC 123", "Broker"],
      custom: "",

      Select: false,
      source: "Broker",
      etrmId: "BRK-345667",
      tradeDate: "2/23/2025",
      etrmBuyerCounterpartyId: "Shell",
      etrmSellerCounterpartyId: "Freepoint",
      sellerTraderName: "Rama",
      buyerTraderName: "Vinnie",
      totalQuantity: 30000,
      startDate: "4/1/2025",
      endDate: "4/30/2025",
      contractDate: "2/24/2025",
      etrmBrokerId: "NNNN",
      masterContractType: "NAESB",
      tradeType: "FP",
      settlementCurrency: "USD",
      pricePrecision: 4,
      priceCurrency: "USD",
      priceUnit: "MMBTU",
      quantityUnit: "MMBTU",
      quantityFrequency: "Daily",
      quantity: 1000,
      fixedPrice: 4.123,
      version: "1",
      "Contract Status": "Active",
      isMismatch: true,
      mismatchedFields: ["etrmId", "source"],
    },
    {
      path: ["ABC 124"],
      custom: {
        endure: true,
        broker: true,
        inbound: true,
        outbound: true,
      },
      Select: false,
      source: "ETRM",
      etrmId: "ABC 124",
      tradeDate: "2/23/2025",
      etrmBuyerCounterpartyId: "Vitol",
      etrmSellerCounterpartyId: "Freepoint",
      sellerTraderName: "Rama",
      buyerTraderName: "Vinnie",
      totalQuantity: 60000,
      startDate: "4/1/2025",
      endDate: "4/30/2025",
      contractDate: "2/24/2025",
      etrmBrokerId: "NNNN",
      masterContractType: "NAESB",
      tradeType: "IDX",
      settlementCurrency: "USD",
      pricePrecision: 4,
      priceCurrency: "USD",
      priceUnit: "MMBTU",
      quantityUnit: "MMBTU",
      quantityFrequency: "Daily",
      quantity: 1000,
      fixedPrice: 4.123,
      version: "1",
      "Contract Status": "Pending",
      isMismatch: false,
      mismatchedFields: [],
    },
    {
      path: ["ABC 124", "Endur"],
      Select: false,
      source: "Endur",
      etrmId: "ABC 124",
      tradeDate: "2/23/2025",
      etrmBuyerCounterpartyId: "Vitol",
      etrmSellerCounterpartyId: "Freepoint",
      sellerTraderName: "Rama",
      buyerTraderName: "Vinnie",
      totalQuantity: 60000,
      startDate: "4/1/2025",
      endDate: "4/30/2025",
      contractDate: "2/24/2025",
      etrmBrokerId: "NNNN",
      masterContractType: "NAESB",
      tradeType: "IDX",
      settlementCurrency: "USD",
      pricePrecision: 4,
      priceCurrency: "USD",
      priceUnit: "MMBTU",
      quantityUnit: "MMBTU",
      quantityFrequency: "Daily",
      quantity: 1000,
      fixedPrice: 4.123,
      version: "1",
      "Contract Status": "Pending",
      isMismatch: false,
      mismatchedFields: [],
    },
    {
      path: ["ABC 124", "Outbound"],
      Select: false,
      source: "Outbound",
      etrmId: "ABC 124",
      tradeDate: "2/23/2025",
      etrmBuyerCounterpartyId: "Vitol",
      etrmSellerCounterpartyId: "Freepoint",
      sellerTraderName: "Rama",
      buyerTraderName: "Vinnie",
      totalQuantity: 60000,
      startDate: "4/1/2025",
      endDate: "4/30/2025",
      contractDate: "2/24/2025",
      etrmBrokerId: "NNNN",
      masterContractType: "NAESB",
      tradeType: "IDX",
      settlementCurrency: "USD",
      pricePrecision: 4,
      priceCurrency: "USD",
      priceUnit: "MMBTU",
      quantityUnit: "MMBTU",
      quantityFrequency: "Daily",
      quantity: 1000,
      fixedPrice: 4.123,
      version: "1",
      "Contract Status": "Pending",
      isMismatch: false,
      mismatchedFields: [],
    },
    {
      path: ["ABC 124", "Inbound"],
      Select: false,
      source: "Inbound",
      etrmId: "ABC 124",
      tradeDate: "2/23/2025",
      etrmBuyerCounterpartyId: "Vitol",
      etrmSellerCounterpartyId: "Freepoint",
      sellerTraderName: "Rama",
      buyerTraderName: "Vinnie",
      totalQuantity: 60000,
      startDate: "4/1/2025",
      endDate: "4/30/2025",
      contractDate: "2/24/2025",
      etrmBrokerId: "NNNN",
      masterContractType: "NAESB",
      tradeType: "IDX",
      settlementCurrency: "USD",
      pricePrecision: 4,
      priceCurrency: "USD",
      priceUnit: "MMBTU",
      quantityUnit: "MMBTU",
      quantityFrequency: "Daily",
      quantity: 1000,
      fixedPrice: 4.123,
      version: "1",
      "Contract Status": "Pending",
      isMismatch: false,
      mismatchedFields: [],
    },
    {
      path: ["ABC 124", "Broker"],
      Select: false,
      source: "Broker",
      etrmId: "ABC 124",
      tradeDate: "2/23/2025",
      etrmBuyerCounterpartyId: "Vitol",
      etrmSellerCounterpartyId: "Freepoint",
      sellerTraderName: "Rama",
      buyerTraderName: "Vinnie",
      totalQuantity: 60000,
      startDate: "4/1/2025",
      endDate: "4/30/2025",
      contractDate: "2/24/2025",
      etrmBrokerId: "NNNN",
      masterContractType: "NAESB",
      tradeType: "IDX",
      settlementCurrency: "USD",
      pricePrecision: 4,
      priceCurrency: "USD",
      priceUnit: "MMBTU",
      quantityUnit: "MMBTU",
      quantityFrequency: "Daily",
      quantity: 1000,
      fixedPrice: 4.123,
      version: "1",
      "Contract Status": "Pending",
      isMismatch: false,
      mismatchedFields: [],
    },
    {
      path: ["ABC 125"],
      custom: {
        endure: true,
        inbound: true,
        outbound: true,
      },
      Select: false,
      source: "ETRM",
      etrmId: "ABC 124",
      tradeDate: "2/23/2025",
      etrmBuyerCounterpartyId: "Vitol",
      etrmSellerCounterpartyId: "Freepoint",
      sellerTraderName: "Rama",
      buyerTraderName: "Vinnie",
      totalQuantity: 60000,
      startDate: "4/1/2025",
      endDate: "4/30/2025",
      contractDate: "2/24/2025",
      etrmBrokerId: "NNNN",
      masterContractType: "NAESB",
      tradeType: "IDX",
      settlementCurrency: "USD",
      pricePrecision: 4,
      priceCurrency: "USD",
      priceUnit: "MMBTU",
      quantityUnit: "MMBTU",
      quantityFrequency: "Daily",
      quantity: 1000,
      fixedPrice: 4.123,
      version: "1",
      "Contract Status": "Pending",
      isMismatch: false,
      mismatchedFields: [],
    },
    {
      path: ["ABC 125", "Endur"],
      Select: false,
      source: "Endur",
      etrmId: "ABC 124",
      tradeDate: "2/23/2025",
      etrmBuyerCounterpartyId: "Vitol",
      etrmSellerCounterpartyId: "Freepoint",
      sellerTraderName: "Rama",
      buyerTraderName: "Vinnie",
      totalQuantity: 60000,
      startDate: "4/1/2025",
      endDate: "4/30/2025",
      contractDate: "2/24/2025",
      etrmBrokerId: "NNNN",
      masterContractType: "NAESB",
      tradeType: "IDX",
      settlementCurrency: "USD",
      pricePrecision: 4,
      priceCurrency: "USD",
      priceUnit: "MMBTU",
      quantityUnit: "MMBTU",
      quantityFrequency: "Daily",
      quantity: 1000,
      fixedPrice: 4.123,
      version: "1",
      "Contract Status": "Pending",
      isMismatch: false,
      mismatchedFields: [],
    },

    {
      path: ["ABC 125", "Outbound"],
      Select: false,
      source: "Outbound",
      etrmId: "ABC 124",
      tradeDate: "2/23/2025",
      etrmBuyerCounterpartyId: "Vitol",
      etrmSellerCounterpartyId: "Freepoint",
      sellerTraderName: "Rama",
      buyerTraderName: "Vinnie",
      totalQuantity: 60000,
      startDate: "4/1/2025",
      endDate: "4/30/2025",
      contractDate: "2/24/2025",
      etrmBrokerId: "NNNN",
      masterContractType: "NAESB",
      tradeType: "IDX",
      settlementCurrency: "USD",
      pricePrecision: 4,
      priceCurrency: "USD",
      priceUnit: "MMBTU",
      quantityUnit: "MMBTU",
      quantityFrequency: "Daily",
      quantity: 1000,
      fixedPrice: 4.123,
      version: "1",
      "Contract Status": "Pending",
      isMismatch: false,
      mismatchedFields: [],
    },
    {
      path: ["ABC 125", "Inbound"],
      Select: false,
      source: "Inbound",
      etrmId: "ABC 124",
      tradeDate: "2/23/2025",
      etrmBuyerCounterpartyId: "Vitol",
      etrmSellerCounterpartyId: "Freepoint",
      sellerTraderName: "Rama",
      buyerTraderName: "Vinnie",
      totalQuantity: 60000,
      startDate: "4/1/2025",
      endDate: "4/30/2025",
      contractDate: "2/24/2025",
      etrmBrokerId: "NNNN",
      masterContractType: "NAESB",
      tradeType: "IDX",
      settlementCurrency: "USD",
      pricePrecision: 4,
      priceCurrency: "USD",
      priceUnit: "MMBTU",
      quantityUnit: "MMBTU",
      quantityFrequency: "Daily",
      quantity: 1000,
      fixedPrice: 4.123,
      version: "1",
      "Contract Status": "Pending",
      isMismatch: false,
      mismatchedFields: [],
    },
  ]);

  function CustomChildRowStats({ custom }: any) {


    function getBgColor(property: string): string {
      if (Object.hasOwn(custom, property)) {
        if (custom[property] === true) {
          return '#58d68d  ';
        }
        else {
          return '#e74c3c ';
        }
      }
      else {
        return 'rgba(174, 174, 174, 0.86) ';
      }
    }


    return (
      <Box className="h-100 d-flex justify-content-evenly align-items-center flex-row gap-1 bg-light p-2">
        <Box className="info_capsule" sx={{ bgcolor: getBgColor('endure') }} />
        <Box className="info_capsule" sx={{ bgcolor: getBgColor('inbound') }} />
        <Box className="info_capsule" sx={{ bgcolor: getBgColor('outbound') }} />
        <Box className="info_capsule" sx={{ bgcolor: getBgColor('broker') }} />
      </Box>
    );
  }

  const CustomGroupCellRenderer = (params: any) => {
    // Only render the custom content for group rows
    return params.node.group ? <CustomChildRowStats custom={params.data.custom} /> : null;
  };

  const [columnDefs, setColumnDefs]: any = useState([
    {
      field: "etrmId",
      headerName: "ETRM ID",
      width: 150,
      cellClass: function (params: any) {
        return params.data.mismatchedFields.includes(params.colDef.field)
          ? "mismatch-cell"
          : "";
      },
    },
    {
      field: "source",
      headerName: "Source",
      width: 150,
      cellClass: function (params: any) {
        return params.data.mismatchedFields.includes(params.colDef.field)
          ? "mismatch-cell"
          : "";
      },
    },
    { field: "tradeDate", headerName: "Trade Date", width: 130 },
    {
      field: "etrmBuyerCounterpartyId",
      headerName: "Buyer",
      width: 150,
      cellClass: function (params: any) {
        return params.data.mismatchedFields.includes(params.colDef.field)
          ? "mismatch-cell"
          : "";
      },
    },
    {
      field: "etrmSellerCounterpartyId",
      headerName: "Seller",
      width: 150,
      cellClass: function (params: any) {
        return params.data.mismatchedFields.includes(params.colDef.field)
          ? "mismatch-cell"
          : "";
      },
    },
    {
      field: "contractDate",
      headerName: "Contract Date",
      width: 150,
      cellClass: function (params: any) {
        return params.data.mismatchedFields.includes(params.colDef.field)
          ? "mismatch-cell"
          : "";
      },
    },
    {
      field: "etrmBrokerId",
      headerName: "Broker ID",
      width: 150,
      cellClass: function (params: any) {
        return params.data.mismatchedFields.includes(params.colDef.field)
          ? "mismatch-cell"
          : "";
      },
    },
    {
      field: "masterContractType",
      headerName: "Contract Type",
      width: 150,
      cellClass: function (params: any) {
        return params.data.mismatchedFields.includes(params.colDef.field)
          ? "mismatch-cell"
          : "";
      },
    },
    {
      field: "tradeType",
      headerName: "Trade Type",
      width: 150,
      cellClass: function (params: any) {
        return params.data.mismatchedFields.includes(params.colDef.field)
          ? "mismatch-cell"
          : "";
      },
    },
    {
      field: "settlementCurrency",
      headerName: "Currency",
      width: 150,
      cellClass: function (params: any) {
        return params.data.mismatchedFields.includes(params.colDef.field)
          ? "mismatch-cell"
          : "";
      },
    },
    {
      field: "pricePrecision",
      headerName: "Precision",
      width: 150,
      cellClass: function (params: any) {
        return params.data.mismatchedFields.includes(params.colDef.field)
          ? "mismatch-cell"
          : "";
      },
    },
    {
      field: "quantityUnit",
      headerName: "Quantity Unit",
      width: 150,
      cellClass: function (params: any) {
        return params.data.mismatchedFields.includes(params.colDef.field)
          ? "mismatch-cell"
          : "";
      },
    },
    {
      field: "quantityFrequency",
      headerName: "Frequency",
      width: 150,
      cellClass: function (params: any) {
        return params.data.mismatchedFields.includes(params.colDef.field)
          ? "mismatch-cell"
          : "";
      },
    },
    {
      field: "quantity",
      headerName: "Quantity",
      width: 150,
      cellClass: function (params: any) {
        return params.data.mismatchedFields.includes(params.colDef.field)
          ? "mismatch-cell"
          : "";
      },
    },
    {
      field: "fixedPrice",
      headerName: "Fixed Price",
      width: 150,
      cellClass: function (params: any) {
        return params.data.mismatchedFields.includes(params.colDef.field)
          ? "mismatch-cell"
          : "";
      },
    },
    {
      field: "version",
      headerName: "Version",
      width: 150,
      cellClass: function (params: any) {
        return params.data.mismatchedFields.includes(params.colDef.field)
          ? "mismatch-cell"
          : "";
      },
    },
    {
      field: "Contract Status",
      headerName: "Status",
      width: 150,
      cellClass: function (params: any) {
        return params.data.mismatchedFields.includes(params.colDef.field)
          ? "mismatch-cell"
          : "";
      },
    },
  ]);

  const onCellDoubleClicked = (params: any) => {
    console.log("Cell Clicked:", params);
    console.log("Column:", params.column.getColId());
    console.log("Row Data:", params.data);
    setShowModal(true);
  };

  const getRowClass = (params: any) => {
    return params.data.isMismatch ? "mismatch-row" : "matched-row"; // ✅ Class for child rows
  };

  const rowSelection = useMemo<
    RowSelectionOptions | "single" | "multiple"
  >(() => {
    return {
      mode: "multiRow",
      groupSelects: "descendants",
    };
  }, []);

  return (
    <div style={{ height: "80%", width: "100%" }}>
      <AgGridReact
        ref={gridRef}
        columnDefs={columnDefs}
        rowData={treeData}
        treeData={true}
        getDataPath={(data) => data.path}
        autoGroupColumnDef={{
          headerName: "Group", // Merged column for both
          field: "custom",
          width: 200,
          cellRenderer: "agGroupCellRenderer", // Use AG Grid's built-in group renderer
          cellRendererParams: {
            innerRenderer: "CustomGroupCellRenderer",  // Use the custom renderer to add colored boxes
          },
        }}
        groupDefaultExpanded={0}
        onCellDoubleClicked={onCellDoubleClicked}
        getRowClass={getRowClass}
        rowSelection={rowSelection}
        components={{
          CustomGroupCellRenderer,  // Register custom group renderer
        }}
      />
    </div>
  );
}
