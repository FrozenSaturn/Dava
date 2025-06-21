"use client";
import React, { useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import { User, Calendar, FileText, History } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import DoctorProfile from "../../../components-for-dash/doctor/DoctorProfile";
import AppointmentQueue from "../../../components-for-dash/doctor/AppointmentQueue";
import { DiagnosisSubmission } from "../../../components-for-dash/doctor/DiagnosisSubmission";

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
    <div className="container mx-auto p-6 space-y-6 min-h-screen">
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
        className="space-y-6 flex-1"
      >
        <TabsList className="grid w-full grid-cols-3 bg-secondary/50">
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
        </TabsList>

        {/* Equal spacing between tab content areas */}
        <div className="space-y-6">
          <TabsContent value="profile" className="mt-6">
            <DoctorProfile />
          </TabsContent>

          <TabsContent value="queue" className="mt-6">
            <AppointmentQueue />
          </TabsContent>

          <TabsContent value="diagnosis" className="mt-6">
            <DiagnosisSubmission />
          </TabsContent>
        </div>
      </Tabs>
    </div>
  );
};

export default DoctorDashboard;