import React, { useContext } from "react";
import { Avatar, Card, Button } from "react-native-elements";
import { SafeAreaView } from "react-native";
import { Context as AuthContext } from "../../contexts/authContext";

const Account = ({ navigation: { navigate } }) => {
  const { signout } = useContext(AuthContext);
  return (
    <>
      <SafeAreaView>
        <Card>
          <Avatar rounded title="MD" />
          <Button onPress={() => signout(navigate)} title="Sign Out" />
        </Card>
      </SafeAreaView>
    </>
  );
};

export default Account;
