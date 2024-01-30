"use client";

import { createViewerToken } from "@/actions/token";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import { JwtPayload, jwtDecode } from "jwt-decode";

const useViewerToken = (hostIdentity: string) => {
  const [token, setToken] = useState("");
  const [name, setName] = useState("");
  const [identity, setIdentitiy] = useState("");

  useEffect(() => {
    const createToken = async () => {
      try {
        const viewerToken = await createViewerToken(hostIdentity);

        setToken(viewerToken);

        const decodedToken = jwtDecode(viewerToken) as JwtPayload & {
          name?: string;
        };

        const name = decodedToken?.name;
        const identity = decodedToken.jti;

        if (identity) {
          setIdentitiy(identity);
        }
        if (name) {
          setName(name);
        }
      } catch (error) {
        toast.error("Somethign went wrong");
      }
    };

    createToken();
  }, [hostIdentity]);

  return {
    token,
    name,
    identity,
  };
};

export default useViewerToken;
