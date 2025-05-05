// styles.ts

import { StyleSheet } from 'react-native';
import { colors } from '../../resuables/colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: 'white',
  },

  // Header
  headerWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    marginTop:30
  },
  iconBackground: {
    backgroundColor: colors.grey,
    padding: 8,
    borderRadius: 40,
  },
  iconStyle: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
  },
  checkoutText: {
    fontSize: 18,
    fontWeight: '600',
    marginLeft: 16,
  },

  // Product Summary
  productSummaryWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 24,
  },
  productImage: {
    width: 88,
    height: 88,
    resizeMode: 'contain',
    marginRight: 12,
  },
  productInfoWrapper: {
    flex: 1,
  },
  productTitle: {
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 6,
  },
  priceTaxWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  productPrice: {
    color: colors.darkOrange,
    fontSize: 20,
    fontWeight: '600',
    marginRight: 8,
  },
  taxText: {
    color: colors.lightDark,
    fontSize: 12,
  },

  // Section Title
  sectionTitle: {
    fontSize: 14,
    fontWeight: '400',
    marginBottom: 8,
    marginTop:-5
  },

  // Shipping Method
  shippingToggleWrapper: {
    flexDirection: 'row',
    backgroundColor: colors.greyFour,
    borderRadius: 30,
    padding: 4,
    marginBottom: 24,
  },
  shippingOption: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
    borderRadius: 30,
  },
  activeShippingOption: {
    backgroundColor: colors.white,
    shadowColor: colors.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 4,
  },
  activeShippingText: {
    // color: 'black',
    fontWeight: '600',
  },
  inactiveShippingText: {
    color: colors.greyFive,
  },

  // Payment Method
  cardScrollWrapper: {
    marginBottom: 12,
  },
  cardContainer: {
    width: 213,
    height: 148,
    borderRadius: 25,
    padding: 16,
    marginRight: 0,
    justifyContent: 'space-between',
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  cardIcon: {
    width: 40,
    height: 24,
    resizeMode: 'contain',
  },
  cardCheckIcon: {
    width: 18,
    height: 18,
    resizeMode: 'contain',
  },
  cardNumber: {
    color: 'white',
    fontSize: 14,
    fontWeight: '500',
  },
  cardDate: {
    color: 'white',
    fontSize: 12,
    fontWeight: '400',
  },

  addNewText: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 20,
  },

  // Alternative Payment Options
  alternatePaymentsWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginTop:-10
   
  },
  paymentIconWrapper: {
    padding: 8,
    borderWidth: 1,
    borderColor: colors.lightDarkTwo,
    borderRadius: 16,
    marginBottom: 24,
    height: 50, width: 95,
    alignItems: 'center',
    justifyContent: 'center',
  },
  goodWrapper:{
    backgroundColor: colors.white,
    borderRadius: 40,
    padding: 4,
    marginLeft: 10,
    marginTop:1
  },
  paymentIcon: {
    width: 40,
    height: 35,
    resizeMode: 'contain',
  },

  // Totals
  totalWrapper: {
    marginBottom: 24,
  },
  totalRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  totalLabel: {
    color: colors.darkCircle,
    fontSize: 14,
  },
  totalValue: {
    color: colors.darkCircle,
    fontSize: 14,
  },
  totalText: {
    color: colors.darkCircle,
    fontWeight: '600',
    fontSize: 16,
  },

  // Purchase Button
  purchaseButton: {
    backgroundColor: colors.lightOrange,
    paddingVertical: 14,
    borderRadius: 30,
    alignItems: 'center',
  },
  purchaseButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
  separator: {
    height: 0.5,
    backgroundColor: colors.lightDarkTwo,
    marginVertical: 20,
    marginTop:-15
  },
});
