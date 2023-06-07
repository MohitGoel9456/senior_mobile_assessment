package com.ledger;
import android.util.Log;

import com.facebook.react.bridge.Callback;
import com.facebook.react.bridge.NativeModule;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.ReadableArray;
import com.facebook.react.bridge.ReadableMap;
import com.facebook.react.bridge.ReadableType;

import java.util.Map;
import java.util.HashMap;

public class BalanceModule extends ReactContextBaseJavaModule {

   BalanceModule(ReactApplicationContext context) {
       super(context);
   }

   @Override
    public String getName() {
    return "BalanceModule";
    }

    @ReactMethod
    public void calculateBalance(ReadableArray transactions, Callback callBack) {

        Double balance = 0.0;
        for(int i = 0; i< transactions.size(); i++) {
          ReadableMap object = transactions.getMap(i);
          if (object != null) {
            if (object.hasKey("amount") && object.getType("amount") == ReadableType.Number) {
              balance += object.getDouble("amount");
            }
          }
        }
      callBack.invoke(balance);
    }

}
