import { StyleSheet, Dimensions } from "react-native";

const { width: screenWidth } = Dimensions.get('window'); // 화면의 가로 길이를 가져옴

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 16,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 70,
    paddingLeft: 25,
    backgroundColor: "white",
    borderBottomWidth: 0.5,
    borderBottomColor: "#DBDBDB",
    paddingBottom: 10
  },
  profileImage: {
    width: 30,
    height: 30,
    borderRadius: 25,
    backgroundColor: "#ccc",
    marginLeft: 20
  },
  username: {
    marginLeft: 10,
    fontSize: 18
  },
  productCard: {
    backgroundColor: "white",
    height: 100,
    width: screenWidth*0.85,
    marginBottom: 30,
    shadowColor: "#000",
    shadowOffset: {
        width: 4,
        height: 5,
    },
    shadowOpacity: 0.1,
    shadowRadius: 5,

    elevation: 5,
    borderWidth: 1,
    borderColor: "#F1F1F1",
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    borderTopRightRadius: 10,
    flexDirection: "row",
  },
  productImage: {
    width: 100,
    height: 100,
    resizeMode: "cover",
    borderBottomLeftRadius: 10,
  },
  productInfo: {
    // paddingLeft: 10,
    paddingHorizontal: 20,
    paddingTop: 10,
    marginBottom: 10
  },
  productTitle: {
    fontSize: 14,
    fontWeight: "bold",
  },
  productPrice: {
    color: "#888",
    marginVertical: 5,
    fontSize: 12
  },
  productTagContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: 18
  },
  productTag: {
    paddingHorizontal: 12,
    paddingVertical: 3,
    borderRadius: 15,
    marginRight: 5,
    marginBottom: 8,
    borderWidth: 1,
    borderColor: '#D9D9D9',
    verticalAlign: 'middle',
    fontSize: 10,
    color: "#666666"
  },
  messageContainer: {
    marginBottom: 16,
  },
  sentMessage: {
    alignSelf: "flex-end",
    backgroundColor: "#583DDF",
    padding: 10,
    marginBottom: 10,
    maxWidth: "75%",
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    borderTopLeftRadius: 10,
    position: 'relative', 
  },
  chatText: {
    lineHeight: 24,
    paddingHorizontal: 8,
    fontSize: 13
  },
  receivedMessage: {
    alignSelf: "flex-start",
    backgroundColor: "#f1f1f1",
    padding: 10,
    maxWidth: "75%",
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    borderTopRightRadius: 10,
    marginBottom: 10,
  },
  time: {
    position: 'absolute',
    bottom: 0, 
    left: -48,
    fontSize: 10,
    color: '#A0A0A0',
  },
  reserveButton: {
    backgroundColor: "#28a745",
    padding: 16,
    marginBottom: 20,
    borderRadius: 10,
    alignItems: "center",
    position: "absolute",
    width: "80%",
    bottom: 80,
    left: "10%",
    shadowColor: "#000",
    shadowOffset: {
        width: 2,
        height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 3,

    elevation: 5,
  },
  reserveButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  footerContainer: {
    // 푸터의 상단에만 그림자가 나오게 설정
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -5 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 5,
  },
  footer: {
    flexDirection: "row",
    alignItems: "center",
    position: "absolute",
    // justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingBottom: 35,
    paddingTop: 5,
    bottom: 0,
    width: screenWidth,
    backgroundColor: "white"
  },
  add: {
    marginRight: 10
  },
  input: {
    flex: 1,
    backgroundColor: "#F7F7F7",
    borderRadius: 10,
    padding: 12,
  },
  sendButton: {
    marginLeft: 12,
    paddingVertical: 10,
    borderRadius: 25,
  },
});

export default styles;
