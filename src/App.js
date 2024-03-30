import Navbar from "./components/Navbar";
import { BrowserRouter , Route , Routes } from 'react-router-dom'
import CustomerPartners from "./pages/CustomerPartners";
import CpAffiliates from "./pages/CpAffiliates";
import AffiliatesOrder from "./pages/AffiliatesOrder";
import SalePartner from "./pages/SalePartner";
import SpAffiliates from "./pages/SpAffiliates";
import SpAffiliatesOrder from "./pages/SpAffiliatesOrder";
import PrimeSalePartner from "./pages/PrimeSalePartner";
import SpAffiliates2 from "./pages/SpAffiliates2";
import SpAffiliateOrder2 from "./pages/SpAffiliateOrder2";
import Register from "./pages/Register";
import PartnerProfile from "./pages/PartnerProfile";
import NewApplication from "./pages/NewApplication";
import PartnerAppDetails from "./pages/PartnerAppDetails";
import PartnerAffiliate from "./pages/PartnerAffiliate";
import PartnerAffOrder from "./pages/PartnerAffOrder";
import PartnerAffOrdDetail from "./pages/PartnerAffOrdDetail";
import PartnerWallet from "./pages/PartnerWallet";
import PartnerWalletDetail from "./pages/PartnerWalletDetail";
import PartnerTransacDetail from "./pages/PartnerTransacDetail";
import TransactionRequest from "./pages/TransactionRequest";
import TransacRequestdetail from "./pages/TransacRequestDetail";
import AllFaqs from "./pages/AllFaqs";
import AddNewFaq from "./pages/AddNewFaq";
import Notification from "./pages/Notification";
import NewNotification from "./pages/NewNotification";
import SpAffiliateOrderDetail from "./pages/SpAffiliateOrderDetail";
import CpAffiliateOrderDetail from "./pages/CpAffiliateOrderDetail";
import SpAffiliateOrderDetail2 from "./pages/SpAffiliateOrderDetail2";
function App() {
  return (
     <BrowserRouter>
     <Navbar />
     <Routes>
      <Route element={ <CustomerPartners /> } path="/custompartner"/>
      <Route element={ <CpAffiliates /> } path="/affiliates"/>
      <Route element={ <AffiliatesOrder /> } path="/affiliateorder"/>
      <Route element={ <SalePartner /> } path="/salepartner"/>
      <Route element={ <SpAffiliates /> } path="/spaffiliates"/>
      <Route element={ <SpAffiliatesOrder /> } path="/spaffiliatesorder"/>
      <Route element={ <PrimeSalePartner /> } path="/prime"/>
      <Route element={ <SpAffiliates2 /> } path="/spaffiliates2"/>
      <Route element={ <SpAffiliateOrder2 /> } path="/spaffiliatesorder2"/>
      <Route element={ <Register /> } path="/register"/>
      <Route element={ <PartnerProfile /> } path="/partnerprofile"/>
      <Route element={ <NewApplication /> } path="/newApp"/>
      <Route element={ <PartnerAppDetails /> } path="/partnerapp"/>
      <Route element={ <PartnerAffiliate /> } path="/partneraffiliate"/>
      <Route element={ <PartnerAffOrder /> } path="/partnerafforder"/>
      <Route element={ <PartnerAffOrdDetail /> } path="/partnerafforddetail"/>
      <Route element={ <PartnerWallet /> } path="/partnerwallet"/>
      <Route element={ <PartnerWalletDetail /> } path="/partnerwalletdetail"/>
      <Route element={ <PartnerTransacDetail /> } path="/transactiondetail"/>
      <Route element={ <TransactionRequest /> } path="/transacrequest"/>
      <Route element={ <TransacRequestdetail /> } path="/transacrequestdetail"/>
      <Route element={ <AllFaqs /> } path="/allfaqs"/>
      <Route element={ <AddNewFaq/> } path="/addnewfaq"/>
      <Route element={ <Notification/> } path="/notifications"/>
      <Route element={ <NewNotification/> } path="/newnotification"/>
      <Route element={ <SpAffiliateOrderDetail/> } path="/spaffiliateorderdetail"/>
      <Route element={ <CpAffiliateOrderDetail/> } path="/cpaffiliateorderdetail"/>
      <Route element={ <SpAffiliateOrderDetail2/> } path="/spaffiliateorderdetail2"/>


      
     
     </Routes>
     
     </BrowserRouter>
  );
}

export default App;