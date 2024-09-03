"use client";

import CreateChannelModal from "@/features/channels/components/CreateChannelModal";
import CreateWorkspaceModal from "@/features/workspaces/components/CreateWorkspaceModal";
import { useEffect, useState } from "react";

function Modals() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <>
      <CreateWorkspaceModal />
      <CreateChannelModal />
    </>
  );
}

export default Modals;
