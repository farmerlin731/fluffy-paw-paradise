package com.example.fluffy_backend.tmp_test;

public class TestLombok {
    public static void main(String[] args) {
        Demo d1 = new Demo(); // 用 @NoArgsConstructor
        d1.setName("小明");
        d1.setAge(20);

        Demo d2 = new Demo("小華", 25); // 用 @AllArgsConstructor

        System.out.println(d1); // Demo(name=小明, age=20)
        System.out.println(d2); // Demo(name=小華, age=25)
    }
}

