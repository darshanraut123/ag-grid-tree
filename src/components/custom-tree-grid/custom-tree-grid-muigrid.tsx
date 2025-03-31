import React from "react";
import {
  useReactTable,
  getCoreRowModel,
  getExpandedRowModel,
  flexRender,
  ColumnDef,
} from "@tanstack/react-table";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  IconButton,
} from "@mui/material";
import { KeyboardArrowRight, KeyboardArrowDown } from "@mui/icons-material";

// ✅ Define TypeScript Interface for Row Data
interface RowData {
  [key: string]: any;
  children?: RowData[];
}

// ✅ Define Columns
const columns: ColumnDef<RowData>[] = [
  {
    accessorKey: "source",
    header: "Source",
    cell: ({ row, getValue }) => (
      <div
        style={{
          paddingLeft: `${row.depth * 10}px`,
          display: "flex",
          alignItems: "center",
        }}
      >
        {row.getCanExpand() && (
          <IconButton onClick={row.getToggleExpandedHandler()} size="small">
            {row.getIsExpanded() ? (
              <KeyboardArrowDown />
            ) : (
              <KeyboardArrowRight />
            )}
          </IconButton>
        )}
        {getValue() as string}
      </div>
    ),
  },
  { accessorKey: "etrmId", header: "ETRM Trade Id" },
  { accessorKey: "tradeDate", header: "Trade Date" },
  { accessorKey: "etrmBuyerCounterpartyId", header: "Buyer Company" },
  { accessorKey: "etrmSellerCounterpartyId", header: "Seller Company" },
  { accessorKey: "sellerTraderName", header: "Seller Trader Name" },
  { accessorKey: "buyerTraderName", header: "Buyer Trader Name" },
  { accessorKey: "totalQuantity", header: "Total Quantity" },
  { accessorKey: "startDate", header: "Start Date" },
  { accessorKey: "endDate", header: "End Date" },
  { accessorKey: "contractDate", header: "Contract Date" },
  { accessorKey: "etrmBrokerId", header: "ETRM Broker Id" },
  { accessorKey: "masterContractType", header: "Master Contract Type" },
  { accessorKey: "tradeType", header: "Pricing Type" },
  { accessorKey: "settlementCurrency", header: "Settlement Currency" },
  { accessorKey: "pricePrecision", header: "Price Precision" },
  { accessorKey: "priceCurrency", header: "Price Currency" },
  { accessorKey: "priceUnit", header: "Price Unit" },
  { accessorKey: "quantityUnit", header: "Quantity Unit" },
  { accessorKey: "quantityFrequency", header: "Quantity Frequency" },
  { accessorKey: "quantity", header: "Quantity" },
  { accessorKey: "fixedPrice", header: "Fixed Price" },
  { accessorKey: "pricingFrequency", header: "Pricing Frequency" },
  { accessorKey: "etrmBuyerPayIndexId", header: "ETRM Buyer Pay Index Id" },
  {
    accessorKey: "buyerIndexAveragingMethod",
    header: "Buyer Index Averaging Method",
  },
  {
    accessorKey: "buyerIndexPricingCalendar",
    header: "Buyer Index Pricing Calendar",
  },
  { accessorKey: "settlementFrequncy", header: "Settlement Frequency" },
  { accessorKey: "deliveryType", header: "Delivery Type" },
  { accessorKey: "etrmPipelineId", header: "ETRM Pipeline Id" },
  {
    accessorKey: "etrmDeliveryLocationId",
    header: "ETRM Delivery Location Id",
  },
  { accessorKey: "indexDifferential", header: "Index Differential" },
  { accessorKey: "version", header: "Version" },
  { accessorKey: "Source Deal ID", header: "Source Deal ID" },
  { accessorKey: "Contract Status", header: "Contract Status" },
  { accessorKey: "Select (Checkbox)", header: "Select (Checkbox)" },
  { accessorKey: "OCR Created at", header: "OCR Created At" },
  { accessorKey: "Extract Created at", header: "Extract Created At" },
  { accessorKey: "OCR Processing time", header: "OCR Processing Time" },
  { accessorKey: "AI Processing time", header: "AI Processing Time" },
  {
    accessorKey: "Confirm location id Name",
    header: "Confirm Location ID Name",
  },
  { accessorKey: "Deal Status (Parent)", header: "Deal Status (Parent)" },
  {
    accessorKey: "Trade Date Duration Status",
    header: "Trade Date Duration Status",
  },
];

// ✅ Table Component
const TreeTable: React.FC<{ rows: RowData[] }> = ({ rows }) => {
  const table = useReactTable({
    data: rows,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getExpandedRowModel: getExpandedRowModel(),
    getSubRows: (row) => row.children ?? [],
  });

  function findDifferences(parent: any, children: any): any {
    console.log(parent);
    const differences: any = [];

    children.forEach((child: any, index: any) => {
      const diff: any = { index, mismatchedFields: {} };

      Object.keys(parent).forEach((key) => {
        if (key !== "children" && parent[key] !== child[key]) {
          diff.mismatchedFields[key] = {
            parentValue: parent[key],
            childValue: child[key],
          };
        }
      });

      if (Object.keys(diff.mismatchedFields).length > 0) {
        differences.push(diff);
      }
    });
    return differences;
  }

  return (
    <TableContainer
      component={Paper}
      sx={{ maxWidth: "100%", mx: 2, my: 1, boxShadow: 3, overflowX: "auto" }}
    >
      <Table>
        <TableHead>
          <TableRow className="theme_light_grey">
            {table.getHeaderGroups().map((headerGroup) =>
              headerGroup.headers.map((header) => (
                <TableCell
                  key={header.id}
                  sx={{ color: "black", fontWeight: "bold" }}
                >
                  {flexRender(
                    header.column.columnDef.header,
                    header.getContext()
                  )}
                </TableCell>
              ))
            )}
          </TableRow>
        </TableHead>
        <TableBody>
          {table.getRowModel().rows.map((row: any) => {
            return (
              <TableRow
                key={row.id}
                sx={{
                  bgcolor: row?.original?.isMismatch ? "#f4b083" : "#92d050",
                }}
              >
                {row.getVisibleCells().map((cell: any) => (
                  <TableCell
                    key={cell.id}
                    onDoubleClick={alert}
                    sx={{
                      bgcolor: cell.row.original.mismatchedFields.includes(
                        cell?.column?.columnDef?.accessorKey
                      )
                        ? "#ff0000"
                        : "inherit",
                    }}
                  >
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </TableCell>
                ))}
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

// ✅ Data
const rows: RowData[] = [
  {
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
    Select: false,
    isMismatch: true,
    mismatchedFields: [],
    children: [
      {
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
        Select: false,
        isMismatch: true,
        mismatchedFields: ["source"],
      },
      {
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
        Select: false,
        isMismatch: true,
        mismatchedFields: ["source", "etrmId"],
      },
      {
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
        Select: false,
        isMismatch: true,
        mismatchedFields: ["source"],
      },
      {
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
        Select: false,
        isMismatch: true,
        mismatchedFields: ["etrmId", "source"],
      },
    ],
  },
  {
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
    Select: false,
    isMismatch: false,
    mismatchedFields: [],
    children: [],
  },
];

export default function CustomTreeGridMui() {
  return <TreeTable rows={rows} />;
}
