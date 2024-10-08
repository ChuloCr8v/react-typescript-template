import { Navigate, Route, Routes } from "react-router-dom";
import ProfileSetting from "./accounts/ProfileSetting";
import Role from "./accounts/Role";
import Customer from "./Admin/Customer";
import CustomerPage from "./Admin/CustomerPage";
import Staff from "./Admin/Staff";
import Invoices from "./billing/invoices";
import NewSubscription from "./billing/subscription/NewSubscription";
import Subscription from "./billing/subscription/Subscriptions";
import Tickets from "./incidence/Tickets";
import Devices from "./inventory/Devices";
import Model from "./inventory/Model";
import Maintenance from "./operations/Maintenance";
import Operations from "./operations/Operations";
import Snags from "./operations/Snag";
import Programs from "./Programs";
import JobOrder from "./projects/JobOrders";
import Survey from "./projects/Survey";
import InitiatePayment from "./projects/surveys/InitiatePayment";
import Billing from "./accounts/Billing";
import PlanUpdate from "./accounts/PlanUpdate";
import Vendor from "./Admin/Vendor";
import { useNavigate } from "react-router-dom";
import Layout from "../components/layout/Layout";
import ProtectedRoutes from "../routes/ProtectedRoutes";
import { useGetAuthUserQuery } from "../api/auth.api";
import { useEffect } from "react";
import { Loading } from "../components/common/Loading";
import ImportCustomerList from "../components/customer/ImportCustomerList";
import ReportDetails from "../components/operations/reports/ReportDetails";

export default function UserPages() {
  const navigate = useNavigate();
  const { data: user, isLoading: loadingUser } = useGetAuthUserQuery();

  useEffect(() => {
    if (!loadingUser && !user) {
      navigate("/login");
    }
  }, [loadingUser, user, navigate]);

  if (loadingUser) return <Loading />;

  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Navigate replace to="/projects/survey" />} />
        <Route path="/projects/surveys" element={<Survey />} />
        <Route
          path="/projects/surveys/initiate-payment"
          element={<InitiatePayment />}
        />
        <Route path="/account/settings" element={<ProfileSetting />} />
        <Route path="/account/roles" element={<Role />} />
        <Route path="/account/billing" element={<Billing />} />
        <Route path="/account/plan-update" element={<PlanUpdate />} />

        <Route path="/operations/maintenance" element={<Maintenance />} />
        <Route path="/operations/snag-reports" element={<Snags />} />
        <Route path="/inventory/model" element={<Model />} />
        <Route path="/inventory/devices" element={<Devices />} />
        <Route path="/incidence/tickets" element={<Tickets />} />
        <Route path="/billing/subscription" element={<Subscription />} />
        <Route path="/billing/add-sub" element={<NewSubscription />} />
        <Route path="/billing/Invoices" element={<Invoices />} />
        <Route path="/projects/job-orders" element={<JobOrder />} />
        <Route path="/program" element={<Programs />} />
        <Route
          path="operations/report/details/:id"
          element={<ReportDetails />}
        />
        <Route path="/admin/staff" element={<Staff />} />
        <Route path="/admin/customers" element={<Customer />} />
        <Route
          path="/admin/customers/import-customers"
          element={<ImportCustomerList />}
        />
        <Route path="/admin/customer-page" element={<CustomerPage />} />
        <Route path="/operations/reports" element={<Operations />} />
        <Route path="/admin/vendor" element={<Vendor />} />

      </Routes>
      <ProtectedRoutes />
    </Layout>
  );
}
