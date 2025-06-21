"use client";
import React, { useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import { User, Calendar, FileText, History } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import DoctorProfile from "../../../components-for-dash/doctor/DoctorProfile";
import AppointmentQueue from "../../../components-for-dash/doctor/AppointmentQueue";
import { DiagnosisSubmission } from "../../../components-for-dash/doctor/DiagnosisSubmission";
import TreatmentHistory from "../../../components-for-dash/doctor/TreatmentHistory";

const DoctorDashboard = () => {
  const router = useRouter();
  const pathname = usePathname();
  const [activeTab, setActiveTab] = useState("profile");

  // Determine the active tab from the path
  let initialTab = "profile";
  if (pathname.endsWith("/queue")) initialTab = "queue";
  else if (pathname.endsWith("/diagnosis")) initialTab = "diagnosis";
  else if (pathname.endsWith("/history")) initialTab = "history";

  // Handle tab change without navigation
  const handleTabChange = (value: string) => {
    setActiveTab(value);
  };

  // TODO: Fetch doctor data from Supabase
  const doctorData = {
    name: "Dr. Sarah Johnson",
    specialty: "Cardiology",
    hospital: "City General Hospital",
    pendingAppointments: 8,
    completedToday: 5,
    awaitingDiagnosis: 3,
  };

  return (
    <div className="container mx-auto p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">
            Doctor Dashboard
          </h1>
          <p className="text-muted-foreground">
            Welcome back, {doctorData.name}
          </p>
        </div>
      </div>

      <Tabs
        value={activeTab}
        onValueChange={handleTabChange}
        className="space-y-6"
      >
        <TabsList className="grid w-full grid-cols-4 bg-secondary/50">
          <TabsTrigger value="profile" className="flex items-center space-x-2">
            <User className="h-4 w-4" />
            <span>Profile</span>
          </TabsTrigger>
          <TabsTrigger value="queue" className="flex items-center space-x-2">
            <Calendar className="h-4 w-4" />
            <span>Appointment Queue</span>
          </TabsTrigger>
          <TabsTrigger
            value="diagnosis"
            className="flex items-center space-x-2"
          >
            <FileText className="h-4 w-4" />
            <span>Submit Diagnosis</span>
          </TabsTrigger>
          <TabsTrigger value="history" className="flex items-center space-x-2">
            <History className="h-4 w-4" />
            <span>Treatment History</span>
          </TabsTrigger>
        </TabsList>

        <TabsContent value="profile">
          <DoctorProfile />
        </TabsContent>
        <TabsContent value="queue">
          <AppointmentQueue />
        </TabsContent>
        <TabsContent value="diagnosis">
          <DiagnosisSubmission />
        </TabsContent>
        <TabsContent value="history">
          <TreatmentHistory />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default DoctorDashboard;
