package com.qi_zhao.qizhao_mortgagecalculator;

import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.CheckBox;
import android.widget.EditText;
import android.widget.RadioButton;
import android.widget.RadioGroup;
import android.widget.TextView;
import android.widget.Toast;

public class MainActivity extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        Button button = (Button)findViewById(R.id.button);
        if (button == null) throw new AssertionError();
        button.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                //initialize variables
                String message="";
                Double amount_d;
                Double rate_d;
                Double loan_term_d;
                Double monthly_pay;
                Double Tax;
                EditText amount = (EditText)findViewById(R.id.editText3);
                TextView tv = (TextView)findViewById(R.id.textView2);
                if (tv == null) throw new AssertionError();
                //check if input is empty
                if (amount == null || amount.getText().toString().trim().length() == 0) {
                    //set value to 0.0 if input is empty and give a toast msg
                    amount_d = 0.0;
                    message = "Amount Borrowed default is $0";
                    Toast.makeText(getApplicationContext(), message, Toast.LENGTH_LONG).show();
                } else {
                    //otherwise make input as value
                    amount_d = Double.parseDouble(amount.getText().toString());
                }

                if (amount_d < 0.0) {
                    message = "Amount Borrowed should be larger than $0";
                    Toast.makeText(getApplicationContext(), message, Toast.LENGTH_LONG).show();
                    tv.setText("$xxxx");
                } else {
                    EditText rate = (EditText)findViewById(R.id.editText4);
                    //check if input is empty
                    if (rate == null || rate.getText().toString().trim().length() == 0) {
                        //set value to 5.0 if input is empty and give a toast msg
                        rate_d = 5.0;
                        message = "Interest rate default is 5.0.";
                        Toast.makeText(getApplicationContext(), message, Toast.LENGTH_LONG).show();
                    } else {
                        //otherwise make input as value
                        rate_d = Double.parseDouble(rate.getText().toString());
                    }
                    //check if interest rate is within valid range
                    //if not then give out a toast message and do nothing
                    if (rate_d < 0.0 || rate_d > 10.0 ){
                        message = "Please input a interest rate between 0.0 and 10.0!";
                        Toast.makeText(getApplicationContext(), message, Toast.LENGTH_LONG).show();
                        tv.setText("$xxxx");
                    //if the rate is valid, then calculate the monthly payment
                    } else {
                        //set the value of loan terms according to radio button selection
                        RadioGroup loan_term = (RadioGroup)findViewById(R.id.radioGroup);
                        if (loan_term == null) throw new AssertionError();
                        int selected=loan_term.getCheckedRadioButtonId();
                        RadioButton selected_radio = (RadioButton)findViewById(selected);
                        if (selected_radio == null) throw new AssertionError();
                        //set value by comparing strings of radio button text， the term is in months
                        if (selected_radio.getText().toString().equals("7 years")){
                            loan_term_d = 7.0*12;
                        } else if (selected_radio.getText().toString().equals("15 years")) {
                            loan_term_d = 15.0*12;
                        } else {
                            loan_term_d = 30.0*12;
                        }



                        //check if interest and taxes are included
                        CheckBox cb = (CheckBox)findViewById(R.id.checkBox);
                        if (cb == null) throw new AssertionError();

                        if (cb.isChecked()) {
                            Tax = amount_d / 1000;
                        } else {
                            Tax = 0.0;
                        }
                        //doing the actual calculation
                        if (rate_d == 0.0) {
                            monthly_pay = amount_d / loan_term_d + Tax;
                        } else {
                            Double monthly_interest = rate_d / 1200;
                            monthly_pay = amount_d * (monthly_interest/(1-Math.pow((1+monthly_interest),0-loan_term_d))) + Tax;
                        }
                        //message = " "+monthly_pay;
                        //Change the monthly payment text

                        tv.setText("$"+ monthly_pay);

                        //Toast.makeText(getApplicationContext(), message, Toast.LENGTH_LONG).show();
                    }
                }


            }
        });
    }
}
