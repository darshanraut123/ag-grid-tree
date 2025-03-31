import SearchBar from "../search-bar/search-bar";
import FilterTabs from "../filter-tabs/filter-tabs";
import CustomTreeGrid from "../custom-tree-grid/custom-tree-grid";
import CustomTreeGridMui from "../custom-tree-grid/custom-tree-grid-muigrid";
import CustomModal from "../modal/custom-modal";
import ModalContext from "../../context/modal-context";

export default function MainContent({ isSidebarOpen }: any): React.JSX.Element {
  return (
    <ModalContext>
      <CustomModal>
        <>
          <p className="mt-4 text-center">MODAL BODY</p>
        </>
      </CustomModal>
      <div className="" style={{ width: isSidebarOpen ? "78vw" : "95vw" }}>
        <SearchBar />
        <FilterTabs />
        {true ? <CustomTreeGrid /> : <CustomTreeGridMui />}
      </div>
    </ModalContext>
  );
}
