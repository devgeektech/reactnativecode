import { StyleSheet, Dimensions } from "react-native";
import theme from '../utils/Theme'

const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({

	container: {
		// paddingTop: 16,
		backgroundColor: '#92cddc'
	},

	buttonContainer: {
		padding: 16,
		marginHorizontal: 4,
		marginVertical: 12,
		borderRadius: 8,
		alignItems: 'center',
		backgroundColor: theme.appColor
	},
	buttonText: {
		fontSize: 18,
	},
	checkBoxContainer: {
		borderWidth: 0,
		paddingHorizontal: 0,
		backgroundColor: "#fff",
		paddingVertical: 0,
	},
	radioButtonContainer: {
		borderWidth: 0,
		backgroundColor: "#fff",
		paddingHorizontal: 0,
		paddingVertical: 0,
	},
	checkBoxWrapperStyle: {
		marginHorizontal: -6,
		marginLeft: -12,
		justifyContent: 'space-between',
	},
	checkBoxText: {
		fontSize: 12,
	},
	title: {
		marginVertical: 4,
		fontSize: 20,
		fontWeight: 'bold'
	},
	flatListContainer: {},

	checkBoxCardContainer: {
		flex: 1,
		marginVertical: 8,
		paddingHorizontal: 8,
		paddingVertical: 8,
		borderRadius: 7,
		backgroundColor: "#fff",
		shadowOffset: {
			height: 1,
			width: 0
		},
		shadowColor: "grey",
		shadowOpacity: 0.3,
		shadowRadius: 1.0,
		elevation: 2,
	},
	inputFieldContainer: {
		marginVertical: 8,
		borderRadius: 7,
		backgroundColor: '#fff',
		shadowOffset: {
			height: 1,
			width: 0
		},
		shadowColor: "grey",
		shadowOpacity: 0.3,
		shadowRadius: 1.0,
		elevation: 2,
	},
	inputWithLabelContainer: {
		flex: 1, marginHorizontal: 0, marginVertical: 4
	},

	cardContainer: {
		marginVertical: 8,
		paddingHorizontal: 16,
		paddingVertical: 12,
		borderRadius: 7,
		backgroundColor: "#fff",
		shadowOffset: {
			height: 1,
			width: 0
		},
		shadowColor: "grey",
		shadowOpacity: 0.3,
		shadowRadius: 1.0,
		elevation: 2,
	},
});

export default styles;
