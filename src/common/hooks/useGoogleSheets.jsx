import { useState, useEffect } from 'react';
import { GoogleSpreadsheet } from 'google-spreadsheet';
import {
  SPREADSHEET_ID,
  CLIENT_EMAIL,
  PRIVATE_KEY,
  SHEET_ID,
} from '../../config';

export const useGoogleSheets = () => {
  const [doc, setDoc] = useState();
  const [isLoading, setIsLoading] = useState(false);

  const appendSpreadsheet = async (row) => {
    setIsLoading(true);
    try {
      await doc.useServiceAccountAuth({
        client_email: CLIENT_EMAIL,
        private_key: PRIVATE_KEY,
      });
      // loads document properties and worksheets
      await doc.loadInfo();

      const sheet = doc.sheetsById[SHEET_ID];
      await sheet.addRow(row);
    } catch (e) {
      // eslint-disable-next-line no-console
      console.error('Error: ', e);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    const document = new GoogleSpreadsheet(SPREADSHEET_ID);
    setDoc(document);
  }, []);

  return { appendSpreadsheet, isLoading };
};
