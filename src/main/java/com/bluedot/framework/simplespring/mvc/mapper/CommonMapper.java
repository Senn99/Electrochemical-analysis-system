package com.bluedot.framework.simplespring.mvc.mapper;

import com.bluedot.framework.simplespring.util.LogUtil;
import javafx.util.Pair;
import org.dom4j.Document;
import org.dom4j.DocumentException;
import org.dom4j.Element;
import org.dom4j.io.SAXReader;
import org.slf4j.Logger;

import java.io.InputStream;
import java.util.*;

/**
 * @author JDsen99
 * @description
 * @createDate 2021/10/2-11:50
 */
public class CommonMapper {

    private Logger logger = LogUtil.getLogger();

    /**
     * Service 映射字典
     */
    public  static Map<String, Pair<Class, String>> methodMapper;

    /**
     * 文件操作类型
     */
    public static Map<String,Integer> fileTypeMapper;

    /**
     * 操作的 角色级别
     */
    public static Map<String,Integer> typeMapper;


    public final static List<String> fileList = new ArrayList<>();

    public void initMapper(Properties contextConfig) {
        logger.debug("start init mapper ... ");
        initFileTypeMapper();
        initTypeMapper();
        initMethodMapper(contextConfig);
        initFileList(contextConfig);
        logger.debug("end init mapper ... ");
    }

    private void initFileList(Properties contextConfig) {
        String boundary = contextConfig.getProperty("fileBoundary");
        //排除空格
        boundary = boundary.trim();
        //分割 ，
        if (boundary.contains(",")){
            if (boundary.endsWith(",")) boundary = boundary.substring(0,boundary.length()-1);
            String[] split = boundary.split(",");
            fileList.addAll(Arrays.asList(split));
        }
    }

    private void initFileTypeMapper() {
        fileTypeMapper = new HashMap<>();
        fileTypeMapper.put("0201",5);
        fileTypeMapper.put("0203",1);
        fileTypeMapper.put("0205",1);
        fileTypeMapper.put("0206",2);
        fileTypeMapper.put("0207",5);
        fileTypeMapper.put("0209",4);
        fileTypeMapper.put("0210",3);
        fileTypeMapper.put("0214",4);
    }
    private void initTypeMapper() {
        typeMapper = new HashMap<>();
        typeMapper.put("0214", 2);
        typeMapper.put("0404", 2);
        typeMapper.put("0405", 2);
        typeMapper.put("0406", 2);
        typeMapper.put("0409", 2);
        typeMapper.put("0410", 2);
        typeMapper.put("0411", 2);
        typeMapper.put("0412", 3);
        typeMapper.put("0413", 3);
        typeMapper.put("0503", 3);
        typeMapper.put("0504", 3);
        typeMapper.put("0703", 3);
        typeMapper.put("0704", 3);
        typeMapper.put("0705", 3);
        typeMapper.put("0803", 3);
    }

    private void initMethodMapper(Properties contextConfig){
        ClassLoader classLoader = this.getClass().getClassLoader();
        String serviceXmlName = contextConfig.getProperty("serviceMapper.name");
        String serviceXmlPath = contextConfig.getProperty("serviceMapper.path");

        logger.debug("Loading parsingXmlMappings --->name:{} ", serviceXmlName);
        InputStream resourceAsStream = this.getClass().getClassLoader().getResourceAsStream(serviceXmlName);
        Document doc = null;
        try {
            SAXReader reader = new SAXReader();
            methodMapper = new HashMap();
            doc = reader.read(resourceAsStream);
            Element service = doc.getRootElement();
            Iterator nodes = service.elementIterator();

            String number = null;
            String service1 = null;
            String method = null;

            while (nodes.hasNext()) {
                Element node = (Element) nodes.next();
                //取节点的值
                number = (String) node.element("number").getData();
                service1 = (String) node.element("service").getData();
                method = (String) node.element("method").getData();

                Class<?> clazz = classLoader.loadClass(serviceXmlPath + "." + service1);
                methodMapper.put(number, new Pair<Class, String>(clazz, method));
            }

            logger.debug("parsingXmlMappings had complete ---> name: {}", "xmlMap");

        } catch (DocumentException e) {
            logger.error("service.xml parse error", e);
        } catch (ClassNotFoundException e) {
            logger.error("service.xml load Class error", e);
        }
    }
}
