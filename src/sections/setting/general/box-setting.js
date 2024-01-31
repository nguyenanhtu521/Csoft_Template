import { Button, Grid, IconButton, SvgIcon, Typography } from "@mui/material";
import { Box } from "@mui/system";
import NextLink from 'next/link';
import settingsConfig from "./setting-config";
import { useState } from "react";
import { Check } from "@mui/icons-material";

export default function BoxSetting() {
    const [selectedGroup, setSelectedGroup] = useState(null); // State để theo dõi nhóm đang được chọn

    const handleGroupClick = (group) => {
        // Xử lý khi nhấp vào một nhóm
        setSelectedGroup(group);
    };

    const handleShowAll = () => {
        // Xử lý khi nhấp vào nút "Tất cả"
        setSelectedGroup(null);
    };

    const uniqueGroups = [...new Set(settingsConfig.map((setting) => setting.group))];

    return (
        <Grid
            container
            spacing={2}
        >
            {/* Hàng ngang chứa các nút nhóm */}
            <Grid container item spacing={2}>
                <Grid item>
                    <Button
                        variant="outlined"
                        size="small"
                        sx={{
                            borderRadius: '3px',
                            borderColor: selectedGroup === null ? 'black' : 'black',
                            backgroundColor: selectedGroup === null ? '#c2ece9' : 'transparent',
                            color: selectedGroup === null ? 'black' : 'black',
                            '&:hover': {
                                backgroundColor: '#c2ece9',
                                borderColor: 'black',
                            },
                        }}
                        onClick={handleShowAll}
                    >
                        {selectedGroup === null && (
                            <SvgIcon
                                fontSize="medium"
                                style={{ color: '#24B915' }}
                            >
                                <Check />
                            </SvgIcon>
                        )}
                        Tất cả
                    </Button>
                </Grid>
                {uniqueGroups.map((group, index) => (
                    <Grid item key={index}>
                        <Button
                            variant="outlined"
                            size="small"
                            sx={{
                                borderRadius: '3px',
                                borderColor: selectedGroup === group ? 'black' : 'black',
                                backgroundColor: selectedGroup === group ? '#c2ece9' : 'transparent',
                                color: selectedGroup === group ? 'black' : 'black',
                                '&:hover': {
                                    backgroundColor: '#c2ece9',
                                    borderColor: 'black',
                                },
                            }}
                            onClick={() => handleGroupClick(group)}
                        >
                            {selectedGroup === group && (
                                <SvgIcon
                                    fontSize="medium"
                                    style={{ color: '#24B915' }}
                                >
                                    <Check />
                                </SvgIcon>
                            )}
                            {group}
                        </Button>
                    </Grid>
                ))}
            </Grid>

            {/* Hiển thị các box theo từng nhóm */}
            {settingsConfig.map((setting, index) => (
                // Hiển thị chỉ khi thuộc nhóm đã chọn hoặc không có nhóm nào được chọn
                (selectedGroup === setting.group || !selectedGroup) &&
                <Grid
                    item
                    key={index}
                    xs={12}
                    sm={6}
                    md={4}
                    lg={3}
                    sx={{
                        padding: '12px !important',
                        display: 'flex'
                    }}
                >
                    <Box
                        component={NextLink}
                        href={setting.path}
                        sx={{
                            border: "1px solid #ccc",
                            borderRadius: "8px",
                            padding: "16px",
                            textAlign: "center",
                            cursor: "pointer",
                            width: '100%',
                            textDecoration: 'none',
                            color: '#000',
                            '&:hover': {
                                backgroundColor: '#f0f0f0',
                                boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
                            },
                        }}
                    >
                        <IconButton>
                            {setting.icon}
                        </IconButton>
                        <Typography>
                            {setting.title}
                        </Typography>
                    </Box>
                </Grid>
            ))}
        </Grid>
    );
}