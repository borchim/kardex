import { DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { useTranslation } from 'react-i18next';
import { Building2 } from 'lucide-react';

interface ViewProps {
    company: any;
}

export default function View({ company }: ViewProps) {
    const { t } = useTranslation();

    return (
        <DialogContent className="max-w-xl max-h-[90vh] overflow-y-auto">
            <DialogHeader className="pb-4 border-b">
                <div className="flex items-center gap-3">
                    <div className="p-2 bg-primary/10 rounded-lg">
                        <Building2 className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                        <DialogTitle className="text-xl font-semibold">{t('Company Details')}</DialogTitle>
                    </div>
                </div>
            </DialogHeader>

            <div className="overflow-y-auto flex-1 p-4 space-y-6">
                <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">{t('Company Name')}</label>
                    <p className="text-sm text-gray-900 bg-gray-50 p-2 rounded">{company.name}</p>
                </div>
                <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">{t('Email')}</label>
                    <p className="text-sm text-gray-900 bg-gray-50 p-2 rounded">{company.email || '-'}</p>
                </div>
            </div>
        </DialogContent>
    );
}
