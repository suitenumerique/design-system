import { useEffect, useState } from "react";
import { ShareModal } from "./ShareModal";

import {
  AccessData,
  InvitationData,
  UserData,
} from ":/components/share/types.ts";
import { ShareModalCopyLinkFooter } from "../utils/ShareModalCopyLinkFooter";

type UserType = UserData & {
  short_name?: string;
  language?: string;
};

export const ShareModalExemple = () => {
  const [userQuery, setUserQuery] = useState("");
  const [users, setUsers] = useState<UserType[]>([]);
  const [invitations, setInvitations] = useState<InvitationData[]>(() => {
    const ids = [1, 2, 3];
    return ids.map((id) => ({
      id: id.toString(),
      user: {
        id: id.toString(),
        full_name: "John Doe " + id,
        email: "john.doe@example.com " + id,
      },
      role: "admin",
      email: "john.doe.invitation@example.com " + id,
    }));
  });
  const [members, setMembers] = useState<UserType[]>(() => {
    const ids = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    return ids.map((id) => ({
      id: id.toString(),
      full_name: "John Doe " + id,
      email: "john.doe@example.com " + id,
      user: {
        id: id.toString(),
        full_name: "John Doe " + id,
        email: "john.doe@example.com " + id,
        short_name: "John Doe " + id,
        language: "en",
      },
      short_name: "John Doe " + id,
      language: "en",
    }));
  });
  const invitationRoles = [
    { label: "Admin", value: "admin" },
    { label: "Editor", value: "editor" },
    { label: "Viewer", value: "viewer" },
  ];

  useEffect(() => {
    if (userQuery === "") {
      setUsers([]);
      return;
    }
    const id1 = Math.floor(Math.random() * 999) + 1;
    const id2 = Math.floor(Math.random() * 999) + 1;
    setUsers([
      {
        id: id1.toString(),
        full_name: "John Doe " + id1,
        email: "john.doe@example.com " + id1,
      },
      {
        id: id2.toString(),
        full_name: "Jane Doe " + id2,
        email: "jane.doe@example.com " + id2,
      },
    ]);
  }, [userQuery]);

  const onUpdateAccess = (access: UserType, role: string) => {
    setMembers(
      members.map((member) =>
        member.id === access.id ? { ...member, role } : member
      )
    );
  };

  const onDeleteAccess = (access: UserType) => {
    setMembers(members.filter((member) => member.id !== access.id));
  };

  const onUpdateInvitation = (invit: InvitationData, role: string) => {
    setInvitations(
      invitations.map((invitation) =>
        invitation.id === invit.id ? { ...invitation, role } : invitation
      )
    );
  };

  const onDeleteInvitation = (invitation: InvitationData) => {
    setInvitations(invitations.filter((invit) => invit.id !== invitation.id));
  };

  return (
    <ShareModal
      isOpen={true}
      onClose={() => {}}
      members={members}
      invitations={invitations}
      onSearchUsers={setUserQuery}
      onInviteUser={console.log}
      onUpdateAccess={onUpdateAccess}
      onDeleteAccess={onDeleteAccess}
      onUpdateInvitation={onUpdateInvitation}
      onDeleteInvitation={onDeleteInvitation}
      invitationRoles={invitationRoles}
      searchUsersResult={users}
      hasNextMembers={true}
      onLoadNextMembers={() => {
        console.log("LOAD NEXT MEMBERS");
      }}
      hasNextInvitations={true}
      onLoadNextInvitations={() => {
        console.log("LOAD NEXT INVITATIONS");
      }}
      outsideSearchContent={
        <ShareModalCopyLinkFooter
          onCopyLink={() => {
            console.log("COPY LINK");
          }}
          onOk={() => {
            console.log("OK");
          }}
        />
      }
    />
  );
};
