package com.book4you.utils;

import java.io.File;
import java.io.FileInputStream;

public class Utils {
    /**
     * Convert an image file to base64 byte array.
     *
     * @param fileName
     * @return
     */
    public byte[] Image2ByteArray(String fileName) {
        FileInputStream fileInputStream=null;
        File file = new File(getClass().getClassLoader().getResource(fileName).getFile());
        byte[] bFile = new byte[(int) file.length()];

        try {
            //convert file into array of bytes
            fileInputStream = new FileInputStream(file);
            fileInputStream.read(bFile);
            fileInputStream.close();
        }catch(Exception e){
            e.printStackTrace();
        }

        return bFile;
    }
}